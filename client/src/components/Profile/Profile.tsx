import React, { ReactElement } from 'react';
import styles from './styles.module.scss';

export default function Profile(): ReactElement {
  return (
    <div className={styles.profile}>
      <h1>You Profile</h1>
      <div>Orders:</div>
    </div>
  );
}
