import { TypedUseSelectorHook } from 'react-redux';

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_ONE = 'FETCH_POSTS_ONE',
  SAVE_POST = 'SAVE_POST',
  UPDATE_POST = 'UPDATE_POST',
  DELETE_POST = 'DELETE_POST',
  SUCCESS_POST = 'SUCCESS_POST',
  POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface PostsAction {
  type: string;
  payload?: any;
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsOneAction {
  type: PostsActionTypes.FETCH_POSTS_ONE;
  payload: IPost;
}
interface PostsSaveAction {
  type: PostsActionTypes.SAVE_POST;
  payload: [any];
}
interface PostUpdateAction {
  type: PostsActionTypes.UPDATE_POST;
  payload: formData;
}
interface PostDeleteAction {
  type: PostsActionTypes.DELETE_POST;
  payload: string;
}
interface PostSuccessAction {
  type: PostsActionTypes.SUCCESS_POST;
  payload: [];
}
interface PostErrorAction {
  type: PostsActionTypes.POSTS_ERROR;
  payload: string;
}

export type PostAction =
  | FetchPostsAction
  | FetchPostsOneAction
  | PostsSaveAction
  | PostUpdateAction
  | PostDeleteAction
  | PostSuccessAction
  | PostErrorAction;

export interface IPostReducer {
  posts: IPost[];
  currentPost: IPost[];
  formData: formData[];
  loading: boolean;
  error: null | string;
}
export interface IPost {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt?: string;
}
export interface APIResponce {
  status: string;
  data: [];
}

export interface formData {
  name: string;
  description: string;
  status: boolean;
}
