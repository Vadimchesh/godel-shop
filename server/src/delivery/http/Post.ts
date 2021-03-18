import express, { Router } from 'express';
import UseCases from '../../UseCases';

const PostRoute: Router = express.Router();

PostRoute.get('/posts', async (req, res) => {
  const { value, error } = await UseCases.PostsService.getPosts();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json(value);
});

PostRoute.get('/posts/:id', async (req, res) => {
  const { value, error } = await UseCases.PostsService.getPost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json(value);
});

PostRoute.post('/posts', async (req, res) => {
  const { value, error } = await UseCases.PostsService.addPost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json({ message: 'Post added', value });
});

PostRoute.put('posts/:id', async (req, res) => {
  const { value, error } = await UseCases.PostsService.updatePost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json({ message: 'Post updated', value });
});

PostRoute.delete('posts/:id', async (req, res) => {
  const { value, error } = await UseCases.PostsService.deletePost();
  if (error) {
    res.status(500).json(error || new Error('Post undefined error'));
    return;
  }
  res.status(200).json({ message: 'Post deleted', value });
});

export default PostRoute;
