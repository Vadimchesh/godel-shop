import { Response, Request } from "express"
import { IPost } from "./../../types/post"
import Post from "../../models/post"
import bodyParser from 'body-parser'


const getPosts = () => {
 Post.find()
}

const addPost = () => {
      const body = bodyParser as Pick<IPost, "name" | "description" | "status">
  
      const post: IPost = new Post({
        name: body.name,
        description: body.description,
        status: body.status,
      })
  
      const newPost: IPost =  post.save()
      const allPosts: IPost[] = Post.find()
    }
  

  const updatePost = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updatePost: IPost | null = await Post.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allPosts: IPost[] = await Post.find()
      res.status(200).json({
        message: "Post updated",
        post: updatePost,
        posts: allPosts,
      })
    } catch (error) {
      throw error
    }
  }

  const deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedPost: IPost | null = await Post.findByIdAndRemove(
        req.params.id
      )
      const allPosts: IPost[] = await Post.find()
      res.status(200).json({
        message: "Post deleted",
        post: deletedPost,
        posts: allPosts,
      })
    } catch (error) {
      throw error
    }
  }
  
  export { getPosts, addPost, updatePost, deletePost }