import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:4000'

export const getPosts = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const posts: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/posts'
    )
    return posts
  } catch (error) {
    throw new Error(error)
  }
}

export const addPost = async (
  formData: IPost
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const post: Omit<IPost, '_id'> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const savePost: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-post',
      post
    )
    return savePost
  } catch (error) {
    throw new Error(error)
  }
}

export const updatePost = async (
  post: IPost
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const postUpdate: Pick<IPost, 'status'> = {
      status: true,
    }
    const updatedPost: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-post/${post._id}`,
      postUpdate
    )
    return updatedPost
  } catch (error) {
    throw new Error(error)
  }
}

export const deletePost = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedPost: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-post/${_id}`
    )
    return deletedPost
  } catch (error) {
    throw new Error(error)
  }
}