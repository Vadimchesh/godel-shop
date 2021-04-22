import { Dispatch } from 'redux';
import delivery from '../../delivery';
import { refreshTokenWithTimeout } from './helper';
import { AuthActionTypes, AuthAction, ChangeEmail, ChangePassword, ChangeSecondPassword } from '../../types/auth';

export const changeEmail = (e: string): ChangeEmail => {
  return { type: AuthActionTypes.CHANGE_EMAIL, payload: e };
};
export const changePassword = (e: string): ChangePassword => {
  return { type: AuthActionTypes.CHANGE_PASSWORD, payload: e };
};
export const changeSecondPassword = (e: string): ChangeSecondPassword => {
  return { type: AuthActionTypes.CHANGE_SECOND_PASSWORD, payload: e };
};

export const registration = (email: string, password: string, secondPassword: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await delivery.ApiAuth.registration(email, password, secondPassword);
      dispatch({ type: AuthActionTypes.SET_ACCESS_TOKEN, payload: response.data.accessToken });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      refreshTokenWithTimeout();
    } catch (e) {
      return new Error(e);
    }
  };
};
export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await delivery.ApiAuth.login(email, password);
      dispatch({ type: AuthActionTypes.SET_ACCESS_TOKEN, payload: response.data.accessToken });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      refreshTokenWithTimeout();
      return;
    } catch (e) {
      dispatch({ type: AuthActionTypes.CHANGE_EMAIL, payload: '' });
      dispatch({ type: AuthActionTypes.CHANGE_PASSWORD, payload: '' });
    }
  };
};
export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.LOGOUT });
      localStorage.removeItem('refreshToken');
      return;
    } catch (e) {
      return new Error(e);
    }
  };
};
export const refresh = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const refreshTokenFromStorage = localStorage.getItem('refreshToken') as string;
      const response = await delivery.ApiAuth.refresh(refreshTokenFromStorage);
      dispatch({ type: AuthActionTypes.SET_ACCESS_TOKEN, payload: response.data.accessToken });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      refreshTokenWithTimeout();
      return response;
    } catch (e) {
      return new Error(e);
    }
  };
};
