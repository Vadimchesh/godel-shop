import PostData from '../../repository';
import { IPostsService } from '../layerInterface';
import { IPost } from '../../repository/mongoose/types/post';

class PostsService implements IPostsService {
  getPosts = () => {
    return PostData.getAll();
  };
  getPost = (id: string) => {
    return PostData.getOne(id);
  };
  addPost = (post: IPost) => {
    return PostData.create(post);
  };
  updatePost = (post: IPost) => {
    return PostData.update(post);
  };
  deletePost = (id: string) => {
    return PostData.delete(id);
  };
}

export default new PostsService();
