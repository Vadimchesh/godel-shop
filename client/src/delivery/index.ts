import { IDelivery } from './layerInterface';
import ApiPosts from './http/ApiPosts';

class Delivery implements IDelivery {
  ApiPosts = ApiPosts;
}

export default new Delivery();
