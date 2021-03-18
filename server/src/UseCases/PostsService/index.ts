import PostData from '../../repository';
import { IPostsService } from '../layerInterface';

class PostsService implements IPostsService {
  getPosts = () => {
    return PostData.getAll();
  };
  getPost = () => {
    return PostData.getOne();
  };
  addPost = () => {
    return PostData.create();
  };
  updatePost = () => {
    return PostData.update();
  };
  deletePost = () => {
    return PostData.delete();
  };
}

export default new PostsService();
