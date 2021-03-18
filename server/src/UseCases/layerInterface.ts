import { IPost } from '../repository/mongoose/types/post';

export interface IUseCases {
  PostsService: IPostsService;
}

export interface IPostsService {
  getPosts: () => Promise<IPost[]>;
  getPost: () => Promise<IPost | null>;
  addPost: () => Promise<IPost>;
  updatePost: () => Promise<IPost | null>;
  deletePost: () => Promise<IPost | null>;
}
