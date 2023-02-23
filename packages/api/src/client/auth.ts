import { AuthApi } from '@tipdapp/api-gateway';
import { api } from './axiosConfig';

// // VALIDATE
// const validate = async (body: any) => api.post('/user/validate', body);

// // NONCE
// type GetNonceResponse = {
//   nonce: string;
// };
// const nonce = async () => api.get<any, GetNonceResponse>('/auth/nonce');

// // VERIFY
// // type PostVerifyMessageResponse<T extends 'user'|'tipper'> = {
// //   user: UserSessionDapp;
// // };
// type PostVerifyMessageResponse<T extends 'user' | 'tipper'> = T extends 'user'
//   ? { user: UserSessionDapp }
//   : { tipper: Tipper };

// type VerifyMessageBody = {
//   message: SiweMessage;
//   signature: string;
//   type: 'user' | 'tipper';
// };

// // const verifyMessage = async <T extends 'user' | 'tipper'>(body: VerifyMessageBody) => {
// const verify = async <T extends VerifyMessageBody['type']>(
//   body: VerifyMessageBody
// ) => api.post<any, PostVerifyMessageResponse<T>>('/auth/verify', body);
// // if (body.type === 'user')
// //   return await api.post<any, PostVerifyMessageResponse<T>>(
// //     '/auth/verify',
// //     body
// //   );
// // if (body.type === 'tipper')
// //   return await api.post<any, PostVerifyMessageResponse<T>>(
// //     '/auth/verify',
// //     body
// //   );

// // LOGOUT
// type LogoutResponse = {
//   message: string;
// };
// const logout = async () => api.get<any, LogoutResponse>('/auth/logout');

// SIGNUP
// type SignUpResponse = {
//   message: string;
//   user: UserSessionDapp;
// };
// type SignUpBody = {
//   message: SiweMessage;
//   signature: string;
//   formData: UserValidation.CreateUser;
//   // formData: any;
// };

const signup = async (body: AuthApi.SignUp.Body) =>
  api.post<unknown, AuthApi.SignUp.ResBody>('/auth/signup', body);

// // REFRESH TOKEN
// type RefreshResponse = {
//   message: string;
// };
// const refreshToken = async () =>
//   api.get<RefreshResponse>('/auth/refreshToken');

// // REFRESH USER SESSION
// type RefreshUserSessionResponse = {
//   message: string;
//   user: UserSessionDapp;
// };
// // type RefreshSessionBody = {
// //   message: SiweMessage;
// //   signature: string;
// //   formData: UserValidation.CreateUser;
// //   // formData: any;
// // };
// const refreshUserSession = async () =>
//   api.get<any, RefreshUserSessionResponse>('/auth/refreshUserSession');

const auth = {
  // validate,
  // nonce,
  // verify,
  // logout,
  signup,
  // refreshToken,
  // refreshUserSession,
};

export { auth };
