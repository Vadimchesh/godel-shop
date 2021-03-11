import React, { ReactElement } from 'react';
import style from './styles.module.scss';

interface Props {
  title: string;
}

export default function Button(props: Props): ReactElement {
  return (
    <div>
      <button className={style.mainBtn}>{props.title}</button>
    </div>
  );
}
