import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const addBlogPost = async (
    formData: IBlogPost
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const post: Omit<IBlogPost, "_id"> = {
        title: formData.title,
        id: formData.id,
        data: formData.data,
      }
      const saveBlogPost: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/add-blogpost",
        post
      )
      return saveBlogPost
    } catch (error) {
      throw new Error(error)
    }
  }