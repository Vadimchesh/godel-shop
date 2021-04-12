import { AuthAction, AuthActionTypes, IAuthReducer } from '../../types/auth';

const initialState: IAuthReducer = {
  email: '',
  password: '',
  passwordConfirmation: '',
  currentUser: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthReducer => {
  switch (action.type) {
    case AuthActionTypes.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case AuthActionTypes.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case AuthActionTypes.CHANGE_SECOND_PASSWORD:
      return { ...state, passwordConfirmation: action.payload };
    case AuthActionTypes.SET_USER:
      return { ...state, currentUser: action.payload, isAuth: true };
    case AuthActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return { ...state, currentUser: null, isAuth: false };
    default:
      return state;
  }
};
