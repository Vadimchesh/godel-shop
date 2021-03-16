import React, { ReactElement } from 'react';
import Discover from '../Discover/Discover';
import Slider from '../Slider/Slider';
import styles from './styles.module.scss';

export default function Home(): ReactElement {
  return (
    <div className={styles.Home}>
      <Slider />
      <Discover />
    </div>
  );
}
