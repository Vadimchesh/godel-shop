import React, { ReactElement, useEffect } from 'react';
import BlogArticle from '../BlogArticle/BlogArticle';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.scss';
import AddBlogPost from '../AddBlogPost/AddBlogPost';
import Modal from '../Modal/Modal';

export default function Blog(): ReactElement {
  const { posts, error, loading } = useTypedSelector(state => state.posts);
  const { isOpen } = useTypedSelector(state => state.modal);
  const { fetchPosts, addPost, openModal, closeModal } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSavePost = (e: React.FormEvent, formData: IPost): void => {
    e.preventDefault();
    addPost(formData);
    closeModal();
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div className={styles.blog}>
      <div className={styles.headline}>
        <h1>Blog posts list</h1>
      </div>
      <div className={styles.blogList}>
        {posts.map(post => (
          <BlogArticle key={post._id} post={post} />
        ))}
      </div>
      <button onClick={() => openModal()}>Add new</button>
      <Modal isOpen={isOpen} onClose={() => closeModal()}>
        <AddBlogPost savePost={handleSavePost} />
      </Modal>
    </div>
  );
}
