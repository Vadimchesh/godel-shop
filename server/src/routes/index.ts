import { Router } from "express"
import { getPosts, addPost, updatePost, deletePost } from "../controllers/posts"

const router: Router = Router()

router.get("/posts", getPosts)

router.post("/add-post", addPost)

router.put("/edit-post/:id", updatePost)

router.delete("/delete-post/:id", deletePost)

export default router