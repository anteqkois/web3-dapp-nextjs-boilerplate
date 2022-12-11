// import { Prisma, Streamer, Tipper, User } from "./prisma";

import { Prisma, Role, User } from '@prisma/client';
import { PartialExcept } from '.';

const user = Prisma.validator<Prisma.UserArgs>()({
  include: {
    avatar: true,
    tipper: true,
    userToken: true,
    streamer: {
      include: {
        page: true,
      },
    },
  },
});

//TODO! Create helper to cast from UserSessionExpanded to specific User
export type UserSession = PartialExcept<
  Prisma.UserGetPayload<typeof user>,
  [Role, 'userToken']
>;
// export type UserSession = Prisma.UserGetPayload<typeof userTipper> | Prisma.UserGetPayload<typeof userStreamer> ;
// export type UserSession = Prisma.UserGetPayload<{
// }>;
//   [P in keyof typeof user]?: typeof user[P] | undefined;

// export type UserSession = User & {
//   [P in keyof typeof user.include]?: typeof user.include[P] | undefined;
// };
// export type UserSession = User & Partial<typeof user.include>;

// export type UserSession<U = Prisma.UserGetPayload<typeof user>> = U &
//   Prisma.UserGetPayload<typeof user>;
// export type UserSession = User & Partial<typeof user.include>
// export type UserSession = Prisma.UserGetPayload<{
//   [P in keyof typeof user]?: typeof user[P] | undefined;
// }>;
// export type UserSession =  Prisma.UserGetPayload<typeof user>;
// export type UserSession =  Prisma.UserGetPayload<Partial< typeof user>>;
// export type UserSesion<U> = UserSesion & U

// export type DecodedUser = {
//   address: string;
//   nick: string;
//   roles: Role[];
// };

export type DecodedUser = Pick<
  User,
  'address' | 'nick' | 'roles' | 'activeRole'
>;

export const mockDecodedUser: DecodedUser = {
  address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  nick: 'anteqkois',
  roles: ['tipper', 'streamer'],
  activeRole: 'streamer',
};

const tipUI = Prisma.validator<Prisma.TipArgs>()({
  include: {
    token: {
      select: {
        name: true,
        symbol: true,
      },
    },
    tipper: {
      select: {
        nick: true,
      },
    },
  },
});

export type TipUI = Prisma.TipGetPayload<typeof tipUI>;
