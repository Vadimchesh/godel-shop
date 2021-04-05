import React, { FC } from 'react';
import Button from '../Elements/Button/Button';
import styles from './styles.module.scss';
import { IPost } from '../../types/posts';
import { NavLink } from 'react-router-dom';
import TimeAgo from '../Elements/TimeAgo/TimeAgo';
import { useActions } from '../../hooks/useAction';
interface IBlogArticleProps {
  post: IPost;
}
const BlogArticle: FC<IBlogArticleProps> = ({ post }) => {
  const { deletePost } = useActions();

  return (
    <div className={styles.article}>
      <div>
        <NavLink to={`/blog/${post._id}`}>
          <h1>{post.name}</h1>
        </NavLink>
      </div>
      <TimeAgo timestamp={post.createdAt} />
      <button onClick={() => deletePost(post._id)}>Delete</button>
      <div className={styles.text}>
        <p>{post.description}</p>
        <NavLink to={`/blog/${post._id}`}>
          <Button title='Read more' />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogArticle;
