import express, { Router } from 'express';
import UseCases from '../../UseCases';

const PostRoute: Router = express.Router();

PostRoute.get('/posts', async (req, res) => {
  try {
    const value = await UseCases.PostsService.getPosts();
    res.status(200).json(value);
  } catch (e) {
    res.status(500).json(e);
  }
});

PostRoute.get('/:id', async (req, res) => {
  const value = await UseCases.PostsService.getPost(req.params.id);
  try {
    res.status(200).json({ message: 'Posts display', value });
  } catch (e) {
    res.status(500).json(e);
  }
});

PostRoute.post('/', async (req, res) => {
  const value = await UseCases.PostsService.addPost(req.body);
  try {
    res.status(200).json({ message: 'Post added', value });
  } catch (e) {
    res.status(500).json(e);
  }
});

PostRoute.put('/:id', async (req, res) => {
  const value = await UseCases.PostsService.updatePost(req.body);
  try {
    res.status(200).json({ message: 'Post updated', value });
  } catch (e) {
    res.status(500).json(e);
  }
});

PostRoute.delete('/:id', async (req, res) => {
  const value = await UseCases.PostsService.deletePost(req.params.id);
  try {
    res.status(200).json({ message: 'Post deleted', value });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default PostRoute;
