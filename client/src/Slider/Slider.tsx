import React, { ReactElement } from 'react';
import style from './styles.module.scss';
import Button from '../Elements/Button/Button';
import { NavLink } from 'react-router-dom';

export default function Slider(): ReactElement {
  return (
    <div className={style.content}>
      <div className={style.slider}>
        <div className={style.headline}>
          <h1>Get ready for your lifetime journey!</h1>
          <h3>Collection of the most beutiful places, experiences anusual housing int the world.</h3>
          <NavLink to='/profile'>
            <Button title='Get started' />
          </NavLink>
        </div>
        <div className={style.sliderNav}>
          <div className={style.progressBar}>
            <span>01</span>
            <progress max='3' value='1'></progress>
            <span>03</span>
          </div>
          <div className={style.arrows}>
            <div className={style.arrowLeft}></div>
            <div className={style.arrowRight}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
