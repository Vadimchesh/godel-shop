import React, { ReactElement } from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
}

export default function Button(props: Props): ReactElement {
  return (
    <div>
      <button className={styles.mainBtn}>{props.title}</button>
    </div>
  );
}
