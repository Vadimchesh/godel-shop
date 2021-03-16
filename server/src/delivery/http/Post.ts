import express, { Router } from "express"
import { getPosts, addPost, updatePost, deletePost } from "../../controllers/posts"

const router: Router = express.Router()

router.get("", async (req, res) => {
    const { value, error } = await getPosts()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json(value)
})
router.post("", async (req, res) => {
    const { value, error } = await addPost()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json({message: "Post added", value})
})
router.put("", async (req, res) => {
    const { value, error } = await updatePost()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json({message: "Post updated", value})
})
router.delete("", async (req, res) => {
    const { value, error } = await deletePost()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json({message: "Todo deleted", value})
})


export default router