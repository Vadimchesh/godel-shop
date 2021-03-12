import React from 'react';

type Props = PostProps & {
  updatePost: (post: IPost) => void;
  deletePost: (_id: string) => void;
};

const PostItem: React.FC<Props> = ({ post, updatePost, deletePost }) => {
  return (
    <div>
      <div>
        <h1>{post.name}</h1>
        <span>{post.description}</span>
      </div>
      <div>
        <button onClick={() => updatePost(post)}>Complete</button>
        <button onClick={() => deletePost(post._id)}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
