import Post from './models/post';
import { IPost } from './types/post';

class PostData {
  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id: string) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const post = await Post.findById(id);
    return post;
  }

  async create(post: IPost) {
    const createdPost = await Post.create({ ...post });
    return createdPost;
  }

  async update(post: IPost) {
    if (!post._id) {
      throw new Error('не указан ID');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id: string) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const post = await Post.findByIdAndRemove(id);
    return post;
  }
}

export default new PostData();
