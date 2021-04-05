import { PostAction, PostsActionTypes, formData } from '../../types/posts';
import Delivery from '../../delivery';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
      const response = await Delivery.ApiPosts.getPosts();
      dispatch({ type: PostsActionTypes.SUCCESS_POST, payload: response.data });
    } catch (e) {
      dispatch({ type: PostsActionTypes.POSTS_ERROR, payload: 'Error load posts' });
    }
  };
};

export const fetchOnePost = (id: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await Delivery.ApiPosts.getPost(id);
      dispatch({ type: PostsActionTypes.FETCH_POSTS_ONE, payload: response.data.value });
      console.log(response.data.value);
    } catch {
      dispatch({ type: PostsActionTypes.POSTS_ERROR, payload: 'Post have not added, sorry so much' });
    }
  };
};

export const addPost = (formData: formData) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const post: Omit<formData, '_id'> = {
        name: formData.name,
        description: formData.description,
        status: false,
      };
      const savePost = await Delivery.ApiPosts.addPost(post);
      dispatch({ type: PostsActionTypes.SAVE_POST, payload: savePost.data.value });
      return savePost;
    } catch (e) {
      dispatch({ type: PostsActionTypes.POSTS_ERROR, payload: 'Error add post' });
    }
  };
};

export const updatePost = async (id: string, formData: IPost) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const postUpdate: Pick<IPost, 'formData'> = {
        formData: formData,
      };
      const updatedPost = await axios.put(`/api/posts/${id}`, postUpdate);
      return updatedPost;
    } catch (e) {
      dispatch({ type: PostsActionTypes.POSTS_ERROR, payload: 'Error update post' });
    }
  };
};

export const deletePost = (_id: string) => async (dispatch: Dispatch<PostAction>) => {
  try {
    const response = await Delivery.ApiPosts.deletePost(_id);
    dispatch({ type: PostsActionTypes.DELETE_POST, payload: response.data.value._id });
  } catch {
    dispatch({ type: PostsActionTypes.POSTS_ERROR, payload: 'Post have not added, sorry so much' });
  }
};
