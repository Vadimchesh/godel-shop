import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import moment from 'moment';

const PostList: React.FC = () => {
  const { posts, error, loading } = useTypedSelector(state => state.posts);
  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <div>{post.name}</div>
          <div>{post.description}</div>
          <div>{post._id}</div>
          <div>Published {moment(post.createdAt).startOf('days').fromNow()}</div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
