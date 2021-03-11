import React from 'react';
import style from './styles.module.scss';

export default function Arrow() {
  return (
    <div className={style.arrows}>
      <div className={style.arrowLeft}></div>
      <div className={style.arrowRight}></div>
    </div>
  );
}
