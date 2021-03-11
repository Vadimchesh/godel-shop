import React, { ReactElement } from 'react'
import style from "./styles.module.scss";

interface Props {
    
}

export default function Search({}: Props): ReactElement {
    return (
        <div className={style.search}>
            <input type="text" placeholder="Search"></input>
        </div>
    )
}
