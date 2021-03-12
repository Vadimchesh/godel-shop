import React, { useEffect, useState } from 'react';
import PostItem from './components/PostItem';
import AddPost from './components/AddPost';
import { getPosts, addPost, updatePost, deletePost } from './API';

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = (): void => {
    getPosts()
      .then(({ data: { posts } }: IPost[] | any) => setPosts(posts))
      .catch((err: Error) => console.log(err));
  };

  const handleSavePost = (e: React.FormEvent, formData: IPost): void => {
    e.preventDefault();
    addPost(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Post not saved');
        }
        setPosts(data.posts);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdatePost = (post: IPost): void => {
    updatePost(post)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Post not updated');
        }
        setPosts(data.posts);
      })
      .catch((err) => console.log(err));
  };

  const handleDeletePost = (_id: string): void => {
    deletePost(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Post not deleted');
        }
        setPosts(data.posts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className='App'>
      <h1>My Posts</h1>
      <AddPost savePost={handleSavePost} />
      {posts.map((post: IPost) => (
        <PostItem
          key={post._id}
          updatePost={handleUpdatePost}
          deletePost={handleDeletePost}
          post={post}
        />
      ))}
    </main>
  );
};

export default App;
