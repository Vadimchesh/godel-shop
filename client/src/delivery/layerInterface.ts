import { AxiosResponse } from 'axios';

export interface IDelivery {
  ApiPosts: IApiPosts;
  ApiAuth: IApiAuth;
}

export interface IApiPosts {
  getPosts: () => Promise<AxiosResponse<ApiDataGetPosts>>;
  getPost: (id: string) => Promise<AxiosResponse<ApiDataGetPost>>;
  addPost: (post: IPost) => Promise<AxiosResponse<ApiDataAddPost>>;
  updatePost: (post: IPost) => Promise<AxiosResponse<ApiDataUpdatePost>>;
  deletePost: (id: string) => Promise<AxiosResponse<ApiDataDeletePost>>;
}
export interface IApiAuth {
  registration: (email: string, password: string, secondPassword: string) => Promise<AxiosResponse<ApiUserRegistration>>;
  login: (email: string, password: string) => Promise<AxiosResponse<ApiUserLogin>>;
}

export type ApiDataGetPosts = {
  message: string;
  status: string;
  value: IPost;
};
export type ApiDataGetPost = {
  message: string;
  status: string;
  value: IPost;
};
export type ApiDataAddPost = {
  message: string;
  status: string;
  value: IPost;
};
export type ApiDataUpdatePost = {
  message: string;
  status: string;
  _id: string;
  value: IPost;
};
export type ApiDataDeletePost = {
  message: string;
  status: string;
  value: IPost;
  _id: string;
};

export type ApiUserRegistration = {
  email: string;
  password: string;
};
export type ApiUserLogin = {
  email: string;
  password: string;
};
