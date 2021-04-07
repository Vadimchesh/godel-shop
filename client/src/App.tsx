import React, { useEffect } from 'react';
import WorkSection from './components/WorkSection/WorkSection';
import Header from './components/Header/Header';
import styles from './styles.module.scss';
import { useActions } from './hooks/useAction';

const App: React.FC = () => {
  const { auth } = useActions();

  useEffect(() => {
    auth();
  }, []);
  return (
    <div className={styles.wrapper}>
      <Header />
      <WorkSection />
    </div>
  );
};

export default App;
