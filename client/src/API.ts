import axios, { AxiosResponse } from 'axios';

export const getPosts = async (): Promise<AxiosResponse<ApiDataGetPosts>> => {
  try {
    const posts: AxiosResponse<ApiDataGetPosts> = await axios.get('/api/posts');
    return posts;
  } catch (error) {
    throw new Error(error);
  }
};
export const getPost = async (): Promise<AxiosResponse<ApiDataGetPost>> => {
  try {
    const post: AxiosResponse<ApiDataGetPost> = await axios.get('/api/posts/_id');
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

export const addPost = async (formData: IPost): Promise<AxiosResponse<ApiDataAddPost>> => {
  try {
    const post: Omit<IPost, '_id'> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const savePost: AxiosResponse<ApiDataAddPost> = await axios.post('/api/posts', post);
    return savePost;
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePost = async (post: IPost): Promise<AxiosResponse<ApiDataUpdatePost>> => {
  try {
    const postUpdate: Pick<IPost, 'status'> = {
      status: false,
    };
    const updatedPost: AxiosResponse<ApiDataUpdatePost> = await axios.put(`/api/posts/${post._id}`, postUpdate);
    return updatedPost;
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (_id: string): Promise<AxiosResponse<ApiDataDeletePost>> => {
  try {
    const deletedPost: AxiosResponse<ApiDataDeletePost> = await axios.delete(`/api/posts/${_id}`);
    return deletedPost;
  } catch (error) {
    throw new Error(error);
  }
};
