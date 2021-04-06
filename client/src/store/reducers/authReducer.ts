import { AuthAction, AuthActionTypes, IAuthReducer } from '../../types/auth';

const initialState: IAuthReducer = {
  email: '',
  password: '',
  secondPassword: '',
  user: [],
  token: [],
};

export const authReducer = (state = initialState, action: AuthAction): IAuthReducer => {
  switch (action.type) {
    case AuthActionTypes.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case AuthActionTypes.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case AuthActionTypes.CHANGE_SECOND_PASSWORD:
      return { ...state, secondPassword: action.payload };
    case AuthActionTypes.LOGIN:
      return { ...state, user: [] };
    case AuthActionTypes.REGISTRATION:
      return { ...state, token: [] };
    default:
      return state;
  }
};
