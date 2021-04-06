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

export const registration = async (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const user = await delivery.ApiAuth.registration(email, password);
      dispatch({ type: AuthActionTypes.REGISTRATION, userRegistration: user });
      return user;
    } catch (e) {
      console.log(e);
    }
  };
};
export const login = async (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const userToken = await delivery.ApiAuth.login(email, password);
      return userToken;
    } catch (e) {
      console.log(e);
    }
  };
};
