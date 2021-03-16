import React from 'react';
import style from './styles.module.scss';
import WorkSection from './WorkSection/WorkSection';
import Header from './Header/Header';

export default function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      {<WorkSection />}
    </div>
  );
}
