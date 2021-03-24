import { IPost } from '../repository/mongoose/types/post';

export interface IUseCases {
  PostsService: IPostsService;
}

export interface IPostsService {
  getPosts: () => Promise<IPost[] | null>;
  getPost: (id: string) => Promise<IPost | null>;
  addPost: (post: IPost) => Promise<IPost | null>;
  updatePost: (post: IPost) => Promise<IPost | null>;
  deletePost: (id: string) => Promise<IPost | null>;
}
