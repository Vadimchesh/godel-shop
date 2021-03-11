import React, { ReactElement } from 'react'
import BlogArticle from '../BlogArticle/BlogArticle';
import style from "./styles.module.scss";

interface Props {

}

export default function Blog({}: Props): ReactElement {
    return (
        <div className={style.blog}>
            <div className={style.headline}>
                <h1>Blog list</h1>
                </div>
                <div className={style.blogList}>                    
                    <BlogArticle headline='New article 1'/>                   
                    <BlogArticle headline='New article 2'/>
                    <BlogArticle headline='New article 3' />
                </div>

            
        </div>
    )
}
