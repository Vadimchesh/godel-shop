import React, { FC } from 'react';

interface IPostItemProps {
  post: IPost;
  updatePost: (post: IPost) => void;
  deletePost: (_id: string) => void;
}

const PostItem: FC<IPostItemProps> = ({ post, updatePost, deletePost }) => {
  return (
    <div>
      <div>
        <h1>{post.name}</h1>
        <span>{post.description}</span>
      </div>
      <div>
        <button onClick={() => updatePost(post)}>Solded</button>
        <button onClick={() => deletePost(post._id)}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
