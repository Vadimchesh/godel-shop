import React, { ReactElement } from 'react'
import s from "./styles.module.scss";

interface Props {
    title: string,
}

export default function Button(props: Props): ReactElement {
    return (
        <div>
            <button className={s.mainBtn}>{props.title}</button>
        </div>
    )
}
