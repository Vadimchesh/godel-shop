import express, { Router } from "express"
import { getPosts, addPost, updatePost, deletePost } from "../../controllers/posts"

const router: Router = express.Router()

router.get("", async (req, res) => {
    const { value, error } = await UC.EventService.getPosts()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json(value)
})
router.post("", async (req, res) => {
    const { value, error } = await UC.EventService.addPost()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json(value)
})
router.put("", async (req, res) => {
    const { value, error } = await UC.EventService.updatePost()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json(value)
})
router.delete("", async (req, res) => {
    const { value, error } = await UC.EventService.delete()
    if (error) {
        res.status(500).json(error || new Error("Post undefined error"))
        return
    }
    res.status(200).json(value)
})


export default router