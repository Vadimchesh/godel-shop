import React from 'react';
import WorkSection from './components/WorkSection/WorkSection';
import Header from './components/Header/Header';
import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <WorkSection />
    </div>
  );
};

export default App;
