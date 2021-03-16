import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { slide as Menu } from 'react-burger-menu';
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
          <ReactSVG className={style.burger} src='burger.svg' />
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
