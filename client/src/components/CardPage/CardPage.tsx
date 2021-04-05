import React, { ReactElement } from 'react';
import Button from '../Elements/Button/Button';
import styles from './styles.module.scss';

export default function CardPage(): ReactElement {
  return (
    <div className={styles.article}>
      <div className={styles.headline}>
        <h1>Card titile</h1>
      </div>
      <img alt='img'></img>
      <div>Date:</div>
      <div className={styles.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati eligendi, non repellendus tenetur provident cum,
          laudantium blanditiis labore voluptatum autem, illum eaque qui soluta quis sequi sit vero possimus.
        </p>
      </div>
      <div>
        <span> Contacts: </span>
        <ul>
          <li>Phone:</li>
          <li>Skype:</li>
        </ul>
      </div>
      <Button title='Order' />
    </div>
  );
}
