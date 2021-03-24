import React, { FC } from 'react';
import Button from '../Elements/Button/Button';
import styles from './styles.module.scss';

interface IBlogArticleProps {
  headline: string;
}

const BlogArticle: FC<IBlogArticleProps> = ({ headline }) => {
  return (
    <div className={styles.article}>
      <div>
        <h1>{headline}</h1>
      </div>
      <div>Date:</div>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati eligendi, non repellendus tenetur provident cum,
          laudantium blanditiis labore voluptatum autem, illum eaque qui soluta quis sequi sit vero possimus.
        </p>
      </div>
      <Button title='Read more' />
    </div>
  );
};

export default BlogArticle;
