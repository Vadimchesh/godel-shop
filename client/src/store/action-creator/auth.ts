import { Dispatch } from 'redux';
import delivery from '../../delivery';
import { AuthActionTypes, AuthAction } from '../../types/auth';

export const changeEmail = (e: string) => {
  return { type: AuthActionTypes.CHANGE_EMAIL, payload: e };
};
export const changePassword = (e: string) => {
  return { type: AuthActionTypes.CHANGE_PASSWORD, payload: e };
};
export const changeSecondPassword = (e: string) => {
  return { type: AuthActionTypes.CHANGE_SECOND_PASSWORD, payload: e };
};

export const registration = (email: string, password: string) => {
  return async () => {
    try {
      const response = await delivery.ApiAuth.registration(email, password);
      return console.log(response.data.message);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };
};
export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await delivery.ApiAuth.login(email, password);
      dispatch({ type: AuthActionTypes.SET_USER, payload: response.data.user });
      localStorage.setItem('token', response.data.token);
      return console.log(response);
    } catch (e) {
      console.log(e.response.data.console.error);
    }
  };
};
export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.LOGOUT });
      return;
    } catch (e) {
      console.log(e);
    }
  };
};
export const auth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await delivery.ApiAuth.auth();
      dispatch({ type: AuthActionTypes.SET_USER, payload: response.data.user });
      localStorage.setItem('token', response.data.token);
      return console.log(response);
    } catch (e) {
      console.log(e.response.data.console.error);
      localStorage.removeItem('token');
    }
  };
};
