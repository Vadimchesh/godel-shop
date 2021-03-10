import React, { ReactElement } from 'react'
import s from "./styles.module.scss";


export default function Arrow() {
    return (
        <div className={s.arrows}>
            <div className={s.arrowLeft}></div>
            <div className={s.arrowRight}></div>
        </div>
    )
}
