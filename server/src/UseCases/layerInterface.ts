import { IPost } from '../repository/mongoose/types/post';
import { IUser } from '../repository/mongoose/types/user';

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
  getUser: (email: string) => Promise<IUser | null>;
  addUser: (email: string, password: string) => Promise<IUser | null>;
}
