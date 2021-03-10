  import React, { ReactElement } from 'react'
  import  s  from "./styles.module.scss";
  import Button from "../Elements/Button/Button";
import { NavLink } from 'react-router-dom';
  
  interface Props {
      
  }
  
  export default function Slider({}: Props): ReactElement {
      return (
          <div className={s.content}>
            <div className={s.slider}>
                <div className={s.headline}>
                <h1>Get ready for your lifetime journey!</h1>
                <h3>Collection of the most beutiful places, experiences
                anusual housing int the world.</h3>
                <NavLink to='/profile'><Button title='Get started'/></NavLink>
                </div>
                <div className={s.sliderNav}>
                    <div className={s.progressBar}>
                        <span>01</span>
                        <progress max="3" value="1">
                        </progress>
                        <span>03</span>
                    </div>
                    <div className={s.arrows}>
                    <div className={s.arrowLeft}></div>
                    <div className={s.arrowRight}></div>
                    </div>
                </div>
            </div>
        </div>

      )
  }
  