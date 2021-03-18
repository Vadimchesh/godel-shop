import PostService from '../../repository';

const getPosts = () => {
  return PostService.getAll();
};
const getPost = () => {
  return PostService.getOne();
};
const addPost = () => {
  return PostService.create([]);
};
const updatePost = () => {
  return PostService.update([]);
};
const deletePost = () => {
  return PostService.delete();
};

export { getPosts, getPost, addPost, updatePost, deletePost };
