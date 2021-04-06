import { IDelivery } from './layerInterface';
import ApiPosts from './http/ApiPosts';
import ApiAuth from './http/ApiAuth';

class Delivery implements IDelivery {
  ApiPosts = ApiPosts;
  ApiAuth = ApiAuth;
}

export default new Delivery();
