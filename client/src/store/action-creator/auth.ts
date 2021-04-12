import { Dispatch } from 'redux';
import delivery from '../../delivery';
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
      dispatch({ type: AuthActionTypes.SET_USER, payload: response.data.user });
    } catch (e) {
      console.log(e.response);
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
      console.log('User not found');
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
      console.log(response);
      dispatch({ type: AuthActionTypes.SET_USER, payload: response.data.user });
      localStorage.setItem('token', response.data.token);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
};
