import React, { ReactElement } from 'react';
import Cards from '../Card/Cards';
import style from './styles.module.scss';

export default function Categories(): ReactElement {
  return (
    <div className={style.categories}>
      <h1>Books</h1>
      <Cards title='Book used' />
    </div>
  );
}
