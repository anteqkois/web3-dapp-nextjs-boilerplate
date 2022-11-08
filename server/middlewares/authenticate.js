import jwt from 'jsonwebtoken';
import { createApiError } from './error.js';

const authenticate = (req, res, next) => {
  const { authToken } = req.cookies;

  if (authToken == null || authToken == undefined) {
    console.log(req.cookies?.authStatus && console.log('change'));
    req.cookies?.authStatus &&
      // res.cookie('authStatus', 'unauthenticated', {
      //   maxAge: 60 * 60 * 1000,
      // });
   
    createApiError(`You are not authorized.`, 401);
  }
  jwt.verify(authToken, process.env.JWT_TOKEN_SECRET, (err, data) => {
    if (err) createApiError(`Wrong authentication token.`, 403);
    req.jwtData = data;
    next();
  });
};

export { authenticate };
export default {
  authenticate,
};
