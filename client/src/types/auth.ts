export enum AuthActionTypes {
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_SECOND_PASSWORD = 'CHANGE_SECOND_PASSWORD',
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}
interface ChangeEmail {
  type: AuthActionTypes.CHANGE_EMAIL;
  payload: string;
}
interface ChangePassword {
  type: AuthActionTypes.CHANGE_PASSWORD;
  payload: string;
}
interface ChangeSecondPassword {
  type: AuthActionTypes.CHANGE_SECOND_PASSWORD;
  payload: string;
}
interface SetUser {
  type: AuthActionTypes.SET_USER;
  payload: IUser | null;
}
interface Logout {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = ChangeEmail | ChangePassword | ChangeSecondPassword | SetUser | Logout;

export interface IAuthReducer {
  email: string;
  password: string;
  secondPassword: string;
  currentUser: IUser | null;
  isAuth: boolean;
}

export interface IUser {
  _id?: string;
  email: string;
  avatar: string;
  createdAt?: string;
}
