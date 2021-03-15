import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styles.module.scss';

export default function Header(): ReactElement {
  return (
    <div className={style.head}>
      <div className={style.header}>
        <div className={style.logo}>
          <NavLink to='/'>Godel Shop</NavLink>
          <span>.</span>
        </div>
        <nav className={style.nav}>
          <div className={style.burger}>
            <label>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className={style.navMenu}>
            <div>
              <NavLink to='/discover'>Discover</NavLink>
            </div>
            <div>
              <NavLink to='/blog'>Blog</NavLink>
            </div>
            <div>
              <NavLink to='/profile'>
                <div className={style.login}>
                  <span></span>
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
