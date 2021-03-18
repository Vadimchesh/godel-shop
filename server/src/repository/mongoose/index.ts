import Post from './models/post';

class PostService {
  async create(post: any) {
    const createdPost = await Post.create({ ...post });
    return createdPost;
  }
  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id: any) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post: any) {
    if (!post._id) {
      throw new Error('не указан ID');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id: any) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
