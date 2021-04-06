import { IUseCases } from './layerInterface';
import PostsService from './PostsService';
import AuthService from './AuthService';

class UseCases implements IUseCases {
  PostsService = PostsService;
  AuthService = AuthService;
}

export default new UseCases();
