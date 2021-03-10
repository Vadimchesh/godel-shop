import React, { ReactElement } from 'react'
import BlogArticle from '../BlogArticle/BlogArticle';
import s from "./styles.module.scss";

interface Props {

}

export default function Blog({}: Props): ReactElement {
    return (
        <div className={s.blog}>
            <div className='headline'>
                <h1>Blog list</h1>
                </div>
                <div className={s.blogList}>                    
                    <BlogArticle headline='New article 1'/>                   
                    <BlogArticle headline='New article 2'/>
                    <BlogArticle headline='New article 3' />
                </div>

            
        </div>
    )
}
