import React, { ReactElement } from 'react';
import style from './styles.module.scss';
import Cards from '../Card/Cards';
import Arrows from '../Elements/Arrows/Arrows';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import BlogArticle from '../BlogArticle/BlogArticle';

export default function Discover(): ReactElement {
  return (
    <div className={style.main}>
      <div className={style.headline}>
        <h1>Discover</h1>
      </div>
      <Search />
      <div className={style.categories}>
        <NavLink to='categories'>
          <h2>Books</h2>
        </NavLink>
        <NavLink to='categories'>
          <h2>Gadgets</h2>
        </NavLink>
        <NavLink to='categories'>
          <h2>Food</h2>
        </NavLink>
      </div>
      <div className={style.list}>
        <Cards title='Kayaka used' />
        <Cards title='Cat used' />
        <Cards title='Dog used' />
        <Cards title='Cup used' />
      </div>
      <Arrows />
    </div>
  );
}
