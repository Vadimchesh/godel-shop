export enum AuthActionTypes {
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_SECOND_PASSWORD = 'CHANGE_SECOND_PASSWORD',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
  REFRESH_TOKENS = 'REFRESH_TOKENS',
  LOGOUT = 'LOGOUT',
}
export interface ChangeEmail {
  type: AuthActionTypes.CHANGE_EMAIL;
  payload: string;
}
export interface ChangePassword {
  type: AuthActionTypes.CHANGE_PASSWORD;
  payload: string;
}
export interface ChangeSecondPassword {
  type: AuthActionTypes.CHANGE_SECOND_PASSWORD;
  payload: string;
}
export interface SetAccessToken {
  type: AuthActionTypes.SET_ACCESS_TOKEN;
  payload: string;
}
export interface RefreshTokens {
  type: AuthActionTypes.REFRESH_TOKENS;
}
export interface Logout {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = ChangeEmail | ChangePassword | ChangeSecondPassword | SetAccessToken | RefreshTokens | Logout;

export interface IAuthReducer {
  email: string;
  password: string;
  passwordConfirmation: string;
  currentUser: IUser | null;
  accessToken: string | null;
  isAuth: boolean;
  refreshTokens: boolean;
}

export interface IUser {
  _id?: string;
  email: string;
  avatar: string;
  createdAt?: string;
}
