import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import Button from '../Elements/Button/Button';
import { NavLink } from 'react-router-dom';

export default function Slider(): ReactElement {
  return (
    <div className={styles.content}>
      <div className={styles.slider}>
        <div className={styles.headline}>
          <h1>Get ready for your lifetime journey!</h1>
          <h3>Collection of the most beutiful places, experiences anusual housing int the world.</h3>
          <NavLink to='/profile'>
            <Button title='Get started' />
          </NavLink>
        </div>
        <div className={styles.sliderNav}>
          <div className={styles.progressBar}>
            <span>01</span>
            <progress max='3' value='1'></progress>
            <span>03</span>
          </div>
          <div className={styles.arrows}>
            <div className={styles.arrowLeft}></div>
            <div className={styles.arrowRight}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
