import React, { ReactElement } from 'react';
import Discover from '../Discover/Discover';
import Slider from '../Slider/Slider';
import style from './styles.module.scss';

export default function Home(): ReactElement {
  return (
    <div className={style.Home}>
      <Slider />
      <Discover />
    </div>
  );
}
