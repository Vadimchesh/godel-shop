import React from 'react';
import styles from './styles.module.scss';

export default function Arrow() {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrowLeft}></div>
      <div className={styles.arrowRight}></div>
    </div>
  );
}
