import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styles.module.scss';

interface ICardProps {
  title: string;
}

export default function Cards(props: ICardProps): ReactElement {
  return (
    <div className={style.card}>
      <NavLink to='/item'>
        <label>
          <svg width='14' height='21' viewBox='0 0 14 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7 13.8158L0 21V0H14V21L7 13.8158Z' fill='#FF532E' />
          </svg>
        </label>
        <div className={style.gradient}>
          <h3>{props.title}</h3>
          <span className={style.icon}>
            <svg width='5' height='7' viewBox='0 0 5 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0C1.12149 0 0 1.13726 0 2.53512C0 4.26992 2.23725 6.81671 2.33251 6.92428C2.42198 7.02533 2.57818 7.02515 2.66749 6.92428C2.76275 6.81671 5 4.26992 5 2.53512C4.99997 1.13726 3.87849 0 2.5 0ZM2.5 3.81062C1.80644 3.81062 1.2422 3.23843 1.2422 2.53512C1.2422 1.83181 1.80645 1.25965 2.5 1.25965C3.19355 1.25965 3.75779 1.83183 3.75779 2.53514C3.75779 3.23845 3.19355 3.81062 2.5 3.81062Z'
                fill='white'
              />
              <path
                d='M2.5 0C1.12149 0 0 1.13726 0 2.53512C0 4.26992 2.23725 6.81671 2.33251 6.92428C2.42198 7.02533 2.57818 7.02515 2.66749 6.92428C2.76275 6.81671 5 4.26992 5 2.53512C4.99997 1.13726 3.87849 0 2.5 0ZM2.5 3.81062C1.80644 3.81062 1.2422 3.23843 1.2422 2.53512C1.2422 1.83181 1.80645 1.25965 2.5 1.25965C3.19355 1.25965 3.75779 1.83183 3.75779 2.53514C3.75779 3.23845 3.19355 3.81062 2.5 3.81062Z'
                fill='url(#paint0_linear)'
              />
              <defs>
                <linearGradient id='paint0_linear' x1='2.5' y1='0' x2='2.5' y2='7' gradientUnits='userSpaceOnUse'>
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>Minsk</span>
        </div>
      </NavLink>
    </div>
  );
}
