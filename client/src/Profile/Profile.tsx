import React, { ReactElement } from 'react';
import style from './styles.module.scss';

export default function Profile(): ReactElement {
  return (
    <div className={style.profile}>
      <h1>You Profile</h1>
      <div>Orders:</div>
    </div>
  );
}
