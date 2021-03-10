
import React, { ReactElement } from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Search from '../Search/Search'
import s from './styles.module.scss'
import Blog from '../Blog/Blog';
import Discover from '../Discover/Discover';
import CardPage from '../CardPage/CardPage';
import Profile from '../Profile/Profile';
import Categories from '../Categories/Categories';


export default function WorkSection() {
    return (
        <div className={s.workSection}>
            <Search />
            <Switch>
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/' component={Discover} />
                <Route exact path='/discover' component={Discover} />
                <Route path='/item' component={CardPage} />
                <Route path='/profile' component={Profile} />
                <Route path='/categories' component={Categories} />
            </Switch>
        </div>
    )
}
