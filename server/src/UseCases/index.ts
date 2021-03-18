import { IUseCases } from './layerInterface';
import PostsService from './PostsService';

class UseCases implements IUseCases {
  PostsService = PostsService;
}

export default new UseCases();
