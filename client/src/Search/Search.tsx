import React, { ReactElement } from 'react';
import style from './styles.module.scss';

export default function Search(): ReactElement {
  return (
    <div className={style.search}>
      <input type='text' placeholder='Search'></input>
    </div>
  );
}
