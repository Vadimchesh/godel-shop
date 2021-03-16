import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import style from './styles.module.scss';

interface ICardProps {
  title: string;
}

export default function Cards(props: ICardProps): ReactElement {
  return (
    <div className={style.card}>
      <NavLink to='/item'>
        {' '}
        <ReactSVG className={style.labelSvg} src='bookmark.svg' />
        <div className={style.gradient}>
          <h3>{props.title}</h3>
          <ReactSVG src='map.svg' className={style.icon} />
          <span>Minsk</span>
        </div>
      </NavLink>
    </div>
  );
}
