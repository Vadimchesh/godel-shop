import axios, { AxiosResponse } from 'axios';
import { IApiPosts } from '../layerInterface';

class ApiPosts implements IApiPosts {
  getPosts = async (): Promise<AxiosResponse> => {
    try {
      const posts: AxiosResponse = await axios.get('/api/posts');
      return posts;
    } catch (error) {
      throw new Error(error);
    }
  };
  getPost = async (id: string): Promise<AxiosResponse> => {
    try {
      const post: AxiosResponse = await axios.get(`/api/posts/${id}`);
      return post;
    } catch (error) {
      throw new Error(error);
    }
  };

  addPost = async (formData: IPost): Promise<AxiosResponse> => {
    try {
      const post: Omit<IPost, '_id'> = {
        name: formData.name,
        description: formData.description,
        status: false,
      };
      const savePost: AxiosResponse = await axios.post('/api/posts', post);
      return savePost;
    } catch (error) {
      throw new Error(error);
    }
  };

  updatePost = async (post: IPost): Promise<AxiosResponse> => {
    try {
      const postUpdate: Pick<IPost, 'status'> = {
        status: false,
      };
      const updatedPost: AxiosResponse = await axios.put(`/api/posts/${post._id}`, postUpdate);
      return updatedPost;
    } catch (error) {
      throw new Error(error);
    }
  };

  deletePost = async (_id: string): Promise<AxiosResponse> => {
    try {
      const deletedPost: AxiosResponse = await axios.delete(`/api/posts/${_id}`);
      return deletedPost;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new ApiPosts();
