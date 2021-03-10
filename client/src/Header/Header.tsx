import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom';
import s from "./styles.module.scss";

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <div className={s.head}>
        <div className={s.header}>
            <div className={s.logo}><NavLink to="/">Godel Shop</NavLink><span>.</span></div>
            <nav className={s.nav}>
                <div className={s.burger}>
                    <label>
                        <span></span>
                        <span></span>
                    </label>
                    </div>
                <div className={s.navMenu}>
                    <div><NavLink to="/discover">Discover</NavLink></div>
                    <div><NavLink to="/blog">Blog</NavLink></div> 
                      <div>
                        <NavLink to="/profile">
                            <div className={s.login}>
                                <span></span>
                            </div>
                        </NavLink>
                    </div>  
                </div>
            </nav>
        </div>
        </div>

    )
}
