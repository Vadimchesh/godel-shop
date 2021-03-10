import React, { ReactElement } from 'react'
import s from "./styles.module.scss";

interface Props {
    
}

export default function Search({}: Props): ReactElement {
    return (
        <div className={s.search}>
            <input type="text" placeholder="Search"></input>
        </div>
    )
}
