import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import bookmark from '../assets/img/bookmark.svg';
import map from '../assets/img/map.svg';
import styles from './styles.module.scss';

interface ICardProps {
  title: string;
}

export default function Cards(props: ICardProps): ReactElement {
  return (
    <div className={styles.card}>
      <NavLink to='/item'>
        {' '}
        <ReactSVG className={styles.labelSvg} src={bookmark} />
        <div className={styles.gradient}>
          <h3>{props.title}</h3>
          <ReactSVG src={map} className={styles.icon} />
          <span>Minsk</span>
        </div>
      </NavLink>
    </div>
  );
}
