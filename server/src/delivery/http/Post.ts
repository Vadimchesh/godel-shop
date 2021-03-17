import express, { Router } from 'express';
import { getPosts, addPost, updatePost, deletePost } from '../../UseCases/posts';

const PostRoute: Router = express.Router();

PostRoute.get('/all', async (req, res) => {
  const { value, error } = await getPosts();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json(value);
});

PostRoute.post('/add-post', async (req, res) => {
  const { value, error } = await addPost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json({ message: 'Post added', value });
});

PostRoute.put('/edit-post/:id', async (req, res) => {
  const { value, error } = await updatePost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json({ message: 'Post updated', value });
});

PostRoute.delete('/delete-post/:id', async (req, res) => {
  const { value, error } = await deletePost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json({ message: 'Todo deleted', value });
});

export default PostRoute;
