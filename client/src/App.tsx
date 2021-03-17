import React from 'react';
import styles from './styles.module.scss';
import WorkSection from './WorkSection/WorkSection';
import Header from './Header/Header';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      {<WorkSection />}
    </div>
  );
}
