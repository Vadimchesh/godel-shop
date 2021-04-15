import { AuthAction, AuthActionTypes, IAuthReducer } from '../../types/auth';

const initialState: IAuthReducer = {
  email: '',
  password: '',
  passwordConfirmation: '',
  currentUser: null,
  accessToken: null,
  isAuth: false,
  refreshTokens: false,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthReducer => {
  switch (action.type) {
    case AuthActionTypes.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case AuthActionTypes.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case AuthActionTypes.CHANGE_SECOND_PASSWORD:
      return { ...state, passwordConfirmation: action.payload };
    case AuthActionTypes.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload, isAuth: true };
    case AuthActionTypes.REFRESH_TOKENS:
      return { ...state, refreshTokens: !state.refreshTokens };
    case AuthActionTypes.LOGOUT:
      return { ...state, accessToken: null, isAuth: false };
    default:
      return state;
  }
};
