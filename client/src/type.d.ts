interface IPost {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type ApiDataGetPosts = {
  message: string;
  status: string;
  value: IPost;
};
type ApiDataGetPost = {
  message: string;
  status: string;
  value: IPost;
};
type ApiDataAddPost = {
  message: string;
  status: string;
  value: IPost;
};
type ApiDataUpdatePost = {
  message: string;
  status: string;
  _id: string;
  value: IPost;
};
type ApiDataDeletePost = {
  message: string;
  status: string;
  value: IPost;
  _id: string;
};
