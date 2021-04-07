import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import burger from '../../assets/img/burger.svg';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './styles.module.scss';

export default function Header(): ReactElement {
  const { isAuth } = useTypedSelector(state => state.auth);
  const { logout } = useActions();

  return (
    <div className={styles.head}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <NavLink to='/'>Godel Shop</NavLink>
          <span>.</span>
        </div>
        <nav className={styles.nav}>
          <ReactSVG className={styles.burger} src={burger} />
          <div className={styles.navMenu}>
            <div>
              <NavLink to='/discover'>Discover</NavLink>
            </div>
            {!isAuth && (
              <div>
                <NavLink to='/login'>Login</NavLink>
              </div>
            )}
            {!isAuth && (
              <div>
                <NavLink to='/registration'>Registration</NavLink>
              </div>
            )}
            {isAuth && (
              <div onClick={() => logout()}>
                <NavLink to='/registration'>Logout</NavLink>
              </div>
            )}
            <div>
              <NavLink to='/blog'>Blog</NavLink>
            </div>
            <div>
              <NavLink to='/profile'>
                <div className={styles.login}>
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
