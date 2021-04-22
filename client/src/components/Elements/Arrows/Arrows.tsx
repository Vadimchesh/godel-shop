import React, { ReactElement } from 'react';
import styles from './styles.module.scss';

export default function Arrow(): ReactElement {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrowLeft}></div>
      <div className={styles.arrowRight}></div>
    </div>
  );
}
