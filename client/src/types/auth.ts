import { AxiosResponse } from 'axios';

export enum AuthActionTypes {
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_SECOND_PASSWORD = 'CHANGE_SECOND_PASSWORD',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
}

interface ModalsAction {
  type: string;
  payload?: string;
  user?: [];
  token?: [];
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
interface AuthLogin {
  type: AuthActionTypes.LOGIN;
  userLogin: [];
}
interface AuthRegistration {
  type: AuthActionTypes.REGISTRATION;
  userRegistration: AxiosResponse<any>;
}

export type AuthAction = ChangeEmail | ChangePassword | ChangeSecondPassword | AuthLogin | AuthRegistration;

export interface IAuthReducer {
  email: string;
  password: string;
  secondPassword: string;
  user: [];
  token: [];
}
