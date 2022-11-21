import { User } from '@prisma/client';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { generateNonce, SiweMessage } from 'siwe';
import {
  createApiError,
  createValidationError,
  createValidationErrors,
  isOperational,
  ValidationError,
} from '../middlewares/error.js';
import { UserService } from '../services/userService';
import { SignUpObject, signUpValidation } from '../validation/signUpValidaion';

const validateSiweMessage = async (
  message: Partial<SiweMessage>,
  signature: string
) => {
  const siwe = new SiweMessage(message || {});

  const { data, success } = await siwe.verify({
    signature,
    domain: process.env.DOMAIN,
  });

  return success
    ? data
    : createValidationError(
        "Siwe Message didn't pass validation.",
        'Siwe Validation',
        'siwe',
        'siwe.invalid'
      );
};

const createAuthToken = (
  userSessionData: Pick<User, 'roles' | 'address' | 'nick'>
) => {
  // const test = process.env.JWT_TOKEN_SECRET;
  const accessToken = jwt.sign(
    {
      roles: userSessionData.roles,
      metadata: {
        address: userSessionData.address,
        nick: userSessionData.nick,
      },
    },
    process.env.JWT_TOKEN_SECRET,
    {
      expiresIn: '1m',
    }
  );
  return accessToken;
};

const createRefreshToken = (
  userSessionData: Pick<User, 'roles' | 'address' | 'nick'>
) => {
  const refreshToken = jwt.sign(
    {
      role: userSessionData.roles,
      metadata: {
        address: userSessionData.address,
        nick: userSessionData.nick,
      },
    },
    process.env.JWT_TOKEN_REFRESH,
    {
      expiresIn: '1d',
    }
  );

  UserService.addRefreshToken({
    address: userSessionData.address,
    refreshToken,
  });

  return refreshToken;
};

const createNonce = (req: Request, res: Response) => {
  //TODO! Save nonce in db or in redis cache
  res.status(200).json({ nonce: generateNonce() });
};

const validate = async (req: Request<{}, {}, SignUpObject>, res: Response) => {
  const { email, nick } = req.body;

  try {
    //Validate schema
    signUpValidation.parse(req.body);

    //Validate unique
    // const user = await UserService.checkIfExist({ email, nick });
    const user = await UserService.checkIfExist({
      OR: [{ email }, { nick }],
    });

    if (user) {
      const errors = [];
      if (user.email === email) {
        const validationError = new ValidationError(
          'email',
          `Email used.`,
          `Email already used by someone.`,
          `email.unique`
        );
        errors.push(validationError);
      }
      if (user.nick === nick) {
        const validationError = new ValidationError(
          'nick',
          `Nick used.`,
          `Nick already used by someone.`,
          `nick.unique`
        );
        errors.push(validationError);
      }
      createValidationErrors(errors);
    }
  } catch (errors) {
    isOperational(errors, "Something went wrong, data didn't pass validation.");
  }

  res.status(200).json({ message: 'Validation passed' });
};

const signUp = async (req: Request, res: Response) => {
  const { message, signature, formData } = req.body;

  try {
    const siweMessage = await validateSiweMessage(message, signature);

    //Validate schema
    signUpValidation.parse(formData);

    //Validate unique
    const userExist = await UserService.checkIfExist({
      OR: [
        { address: siweMessage.address },
        { email: formData.email },
        { nick: formData.nick },
      ],
    });

    //throw error if exist
    if (userExist) {
      const errors = [];
      if (userExist.address === siweMessage.address) {
        const validationError = new ValidationError(
          'address',
          `Already registered.`,
          `The wallet has already been registered. Go to login page or disconnect wallet from DAPP and then change wallet.`,
          `address.unique`
        );
        errors.push(validationError);
      }
      if (userExist.email === formData.email) {
        const validationError = new ValidationError(
          'email',
          `Email used.`,
          `Email already used by someone.`,
          `email.unique`
        );
        errors.push(validationError);
      }
      if (userExist.nick === formData.nick) {
        const validationError = new ValidationError(
          'nick',
          `Nick used.`,
          `Nick already used by someone.`,
          `nick.unique`
        );
        errors.push(validationError);
      }
      createValidationErrors(errors);
    }

    const userSessionData = await UserService.create({
      data: {
        ...formData,
        page: {
          create: {
            url: formData.nick,
          },
        },
      },
    });

    const authToken = createAuthToken(userSessionData);
    const refreshToken = createRefreshToken(userSessionData);

    res.cookie('authToken', authToken, {
      secure: true,
      // 0.5min = 0.5 * 60 * 1000ms
      maxAge: 0.5 * 60 * 1000,
      httpOnly: true,
    });

    res.cookie('refreshToken', refreshToken, {
      secure: true,
      // 24h
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json({
      message: 'The account has been successfully created.',
      user: userSessionData,
    });
  } catch (error) {
    isOperational(error, "Something went wrong, account didn't created.");
  }
};

const verifyMessageAndLogin = async (req: Request, res: Response) => {
  const { message, signature } = req.body;
  try {
    const siweMessage = await validateSiweMessage(message, signature);

    const userSessionData = await UserService.find({
      where: {
        address: siweMessage.address,
      },
    });

    if (userSessionData) {
      const authToken = createAuthToken(userSessionData);
      const refreshToken = createRefreshToken(userSessionData);

      res.cookie('authToken', authToken, {
        secure: true,
        // 1min = 1 * 60 * 1000ms
        maxAge: 1 * 60 * 1000,
        httpOnly: true,
      });

      res.cookie('refreshToken', refreshToken, {
        secure: true,
        // 24h
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res
        .status(200)
        .json({ message: 'You are authorizated', user: userSessionData });
    } else {
      createValidationError(
        'Account not registered. Sign in first.',
        'No user found',
        'user',
        'user'
      );
    }
  } catch (err) {
    isOperational(err, "Something went wrong, you didn't login.");
  }
};

const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  res.cookie('authToken', '', {
    maxAge: 0,
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.cookie('refreshToken', '', {
    maxAge: 0,
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  await UserService.removeRefreshToken({
    address: req.user.address,
    refreshToken: refreshToken,
  });
  res.cookie('authStatus', 'unauthenticated');

  res.status(200).send({ message: 'You are succesfully logout.' });
};

const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken, authToken } = req.cookies;

  if (!refreshToken) {
    if (!authToken) res.cookie('authStatus', 'unauthenticated');
    createApiError(`Missing refresh token.`, 401);
  }

  // Clear cookie
  res.cookie('refreshToken', '', {
    maxAge: 0,
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  const user = await UserService.findByRefreshToken({ refreshToken });

  // Somebody want to reuse refresh token, maybe stolen token ?
  if (!user) {
    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_TOKEN_SECRET
      ) as decodedJWT;
      await UserService.updateRefreshTokens({
        address: decoded.metadata.address,
        refreshTokens: [],
      });
      createApiError(`Token has been already used.`, 403);
    } catch (error) {
      res.cookie('authStatus', 'unauthenticated');
      createApiError(`Invalid refresh token.`, 403);
    }
  } else {
    // Remove token from database
    await UserService.removeRefreshToken({
      address: user.address,
      refreshToken,
    });

    try {
      const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_TOKEN_REFRESH
      ) as decodedJWT;

      if (decoded.metadata.address !== user.address)
        createApiError('Invalid refresh token', 403);

      const newAuthToken = createAuthToken(user);
      const newRefreshToken = createRefreshToken(user);

      res.cookie('authToken', newAuthToken, {
        secure: true,
        // 1min
        maxAge: 1 * 60 * 1000,
        httpOnly: true,
      });

      res.cookie('refreshToken', newRefreshToken, {
        secure: true,
        // 24h
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.status(200).json({ message: 'Token was successfully refreshed.' });
    } catch (error) {
      res.cookie('authStatus', 'unauthenticated');
      createApiError('Refresh token is stale', 403);
    }
  }
};

export {
  validate,
  createNonce,
  verifyMessageAndLogin,
  logout,
  signUp,
  refreshToken,
};
