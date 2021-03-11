import React, { ReactElement } from 'react'
import Button from '../Elements/Button/Button';
import style from "./styles.module.scss";
interface IBlogArticleProps {
    headline: string;
}

export default function BlogArticle(props: IBlogArticleProps): ReactElement {
    return (
        <div className={style.article}>
            <div className={style.headline}><h1>{props.headline}</h1></div>
            <div>Date:</div>
            <div className={style.text}> 
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati eligendi, 
                non repellendus tenetur provident cum, laudantium blanditiis labore voluptatum autem, 
                illum eaque qui soluta quis sequi sit vero possimus.
                </p>
            </div>
            <Button title='Read more' />
        </div>
    )
}
