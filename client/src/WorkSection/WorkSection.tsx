import React from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './styles.module.scss';
import Blog from '../Blog/Blog';
import Discover from '../Discover/Discover';
import CardPage from '../CardPage/CardPage';
import Profile from '../Profile/Profile';
import Categories from '../Categories/Categories';
import Home from '../Home/Home';

export default function WorkSection() {
  return (
    <div className={style.workSection}>
      <Switch>
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/discover' component={Discover} />
        <Route path='/item' component={CardPage} />
        <Route path='/profile' component={Profile} />
        <Route path='/categories' component={Categories} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
