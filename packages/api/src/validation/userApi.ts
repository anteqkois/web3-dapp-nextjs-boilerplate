import { NestedUser, Role, User, UserSession, UserToken } from '@tipdapp/types';
import { Request, Response } from 'express';
import { z } from 'zod';
import { transformApiInclude } from './utils';

const userInclude = z
  .array(
    z.union([
      z.literal('avatar'),
      z.literal('streamer'),
      z.literal('tips'),
      z.literal('userToken'),
    ])
  )
  .transform((include) => transformApiInclude(include));

const findByAddress = z.object({
  query: z.object({
    include: userInclude.optional(),
  }),
  params: z.object({
    address: z.string(),
  }),
});

const find = z.object({
  query: z.object({
    nick: z.string().optional(),
    address: z.string().optional(),
    include: userInclude.optional(),
  }),
});

const findUserToken = z.object({
  params: z.object({
    address: z.string(),
  }),
});

const validate = z.object({
  body: z.object({
    email: z.string({ required_error: 'E-mail is required.' }).email(),
    nick: z
      .string({ required_error: 'Nick is required.' })
      .min(2, { message: 'Nick must have 2 or more characters.' }),
    firstName: z
      .string({ required_error: 'First name is required.' })
      .min(3, { message: 'First name must have 3 or more characters.' }),
    lastName: z
      .string({ required_error: 'Last name is required.' })
      .min(3, { message: 'Last name must have 3 or more characters.' }),
    roles: z.array(
      z.union([z.literal(Role.charity), z.literal(Role.streamer)]),
      { required_error: 'You must choose at least one role.' }
    ),
  }),
});

const create = z.object({
  body: z.object({
    address: z.string({ required_error: 'Wallet address is missing.' }),
    email: z.string({ required_error: 'E-mail is required.' }).email(),
    nick: z
      .string({ required_error: 'Nick is required.' })
      .min(2, { message: 'Nick must have 2 or more characters.' }),
    firstName: z
      .string({ required_error: 'First name is required.' })
      .min(3, { message: 'First name must have 3 or more characters.' }),
    lastName: z
      .string({ required_error: 'Last name is required.' })
      .min(3, { message: 'Last name must have 3 or more characters.' }),
    roles: z.array(
      z.union([z.literal(Role.charity), z.literal(Role.streamer)]),
      { required_error: 'You must choose at least one role.' }
    ),
  }),
});

export namespace UserApi {
  export namespace FindByAddress {
    const requestShape = findByAddress.shape;
    export type Params = z.input<typeof requestShape.params>;
    export type Query = z.input<typeof requestShape.query>;
    export type ResBody = { user: User };
    export type Req = Request<Params, any, any, Query>;
    export type Res = Response<ResBody>;
  }
  export namespace Find {
    const requestShape = find.shape;
    export type Query = z.input<typeof requestShape.query>;
    // export type ResBody = { user: Partial<NestedUser> };
    export type ResBody = { user: NestedUser };
    export type Req = Request<any, any, any, Query>;
    export type Res = Response<ResBody>;
  }
  export namespace FindUserToken {
    const requestShape = findUserToken.shape;
    export type Params = z.input<typeof requestShape.params>;
    export type ResBody = { userToken: UserToken };
    export type Req = Request<Params, any, any, any>;
    export type Res = Response<ResBody>;
  }
  export namespace Validate {
    const requestShape = validate.shape;
    export type Body = z.input<typeof requestShape.body>;
    export type ResBody = { message: string };
    export type Req = Request<any, any, Body, any>;
    export type Res = Response<ResBody>;
  }
  export namespace Create {
    const reqShape = create.shape;
    export type Body = z.input<typeof reqShape.body>;
    export type ResBody = { user: UserSession };
    export type Req = Request<any, any, Body, any>;
    export type Res = Response<ResBody>;
  }
}

export const userApi = {
  findByAddress,
  find,
  findUserToken,
  validate,
  create,
};
