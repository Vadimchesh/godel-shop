import React, { ReactElement } from 'react';
import styles from './styles.module.scss';

export default function Search(): ReactElement {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Search'></input>
    </div>
  );
}
