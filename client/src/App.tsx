import React, { useEffect, useState } from 'react';
import PostItem from './components/PostItem';
import AddPost from './components/AddPost';
import { getPosts, addPost, updatePost, deletePost } from './API';
import Modal from './components/Modal/Modal';
import styles from './styles.module.scss';
import WorkSection from './WorkSection/WorkSection';
import Header from './Header/Header';

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = (): void => {
    getPosts()
      .then(({ data }: IPost[] | any) => setPosts(data))
      .catch((err: Error) => console.log(err));
  };

  const handleSavePost = (e: React.FormEvent, formData: IPost): void => {
    e.preventDefault();
    addPost(formData)
      .then(({ data }) => {
        setPosts([...posts, data.value]);
      })
      .catch(err => console.log(err));
  };

  const handleUpdatePost = (post: IPost): void => {
    updatePost(post)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Post not updated');
        }
        setPosts([...posts, data.value]);
      })
      .catch(err => console.log(err));
  };

  const handleDeletePost = (_id: string): void => {
    deletePost(_id)
      .then(({ data }) => {
        setPosts([...posts.filter(post => post._id !== data.value._id)]);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      {<WorkSection />}
      <main className='App'>
        <h1>My Posts</h1>
        <div>
          {posts.map((post: IPost) => (
            <PostItem key={post._id} updatePost={handleUpdatePost} deletePost={handleDeletePost} post={post} />
          ))}
        </div>
        <div>
          <button onClick={() => setIsOpen(true)}>Add new</button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <AddPost savePost={handleSavePost} />
          </Modal>
        </div>
      </main>
    </div>
  );
};

export default App;
