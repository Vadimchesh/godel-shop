import { IPost } from '../repository/mongoose/types/post';
import { IUser } from '../repository/mongoose/types/user';
import { IFuncResultModel } from '../modals/index';
export interface IUseCases {
  PostsService: IPostsService;
  AuthService: IAuthService;
}

export interface IPostsService {
  getPosts: () => Promise<IPost[] | null>;
  getPost: (id: string) => Promise<IPost | null>;
  addPost: (post: IPost) => Promise<IPost | null>;
  updatePost: (post: IPost) => Promise<IPost | null>;
  deletePost: (id: string) => Promise<IPost | null>;
}
export interface IAuthService {
  getUser: (email: string) => Promise<IUser>;
  addUser: (data: IAddNewUser) => Promise<IFuncResultModel<IUser>>;
  login: (data: ILogin) => Promise<IFuncResultModel<ILoginTokens>>;
  refresh: (userToken: IRefreshTokenUser) => Promise<IFuncResultModel<ILoginTokens>>;
}

export interface IAddNewUser {
  email: string;
  password: string;
  passwordConfirmation: string;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface ILoginTokens {
  accessToken: string;
  refreshToken: string;
}
export interface IissueTokenPair {
  token: string;
  refreshToken: string;
}

export interface IRefreshTokenUser {
  refreshTokenUser: string;
}

export interface ITokenSub {
  id: string;
}
