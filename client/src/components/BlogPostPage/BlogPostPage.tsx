import React, { FC, useEffect } from 'react';
import TimeAgo from '../Elements/TimeAgo/TimeAgo';
import { useActions } from '../../hooks/useAction';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.scss';
import Modal from '../Modal/Modal';
import EditBlogPost from '../EditBlogPost/EditBlogPost';

interface IBlogPostParam {
  id: string;
}
const BlogPostPage: FC = () => {
  const { id } = useParams<IBlogPostParam>();
  const { fetchOnePost, updatePost, openModal, closeModal } = useActions();
  const { currentPost, error, loading } = useTypedSelector(state => state.posts);
  const { isOpen } = useTypedSelector(state => state.modal);

  useEffect(() => {
    fetchOnePost(id);
  }, []);

  const handleUpdatePost = (e: React.FormEvent, formData: IPost): void => {
    e.preventDefault();
    updatePost(id, formData);
    closeModal();
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className={styles.post}>
      {currentPost.map(post => (
        <div key={post._id}>
          <h1>{post.name}</h1>
          <div>
            <span>Posted</span>
            <TimeAgo timestamp={post.createdAt} />
          </div>
          <div>{post.description}</div>
        </div>
      ))}
      <button onClick={() => openModal()}>Add new</button>
      <Modal isOpen={isOpen} onClose={() => closeModal()}>
        <EditBlogPost updatePost={handleUpdatePost} />
      </Modal>
    </div>
  );
};

export default BlogPostPage;
