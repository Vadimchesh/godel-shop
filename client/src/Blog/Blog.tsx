import React, { ReactElement } from 'react';
import BlogArticle from '../BlogArticle/BlogArticle';
import styles from './styles.module.scss';

export default function Blog(): ReactElement {
  return (
    <div className={styles.blog}>
      <div className={styles.headline}>
        <h1>Blog list</h1>
      </div>
      <div className={styles.blogList}>
        <BlogArticle headline='New article 1' />
      </div>
    </div>
  );
}
