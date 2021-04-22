import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.module.scss';
import Blog from '../Blog/Blog';
import Discover from '../Discover/Discover';
import CardPage from '../CardPage/CardPage';
import Profile from '../Profile/Profile';
import Categories from '../Categories/Categories';
import Home from '../Home/Home';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import Login from '../Auth/Login/Login';
import Registration from '../Auth/Registration/Registration';

export default function WorkSection(): ReactElement {
  return (
    <div className={styles.workSection}>
      <Switch>
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/discover' component={Discover} />
        <Route path='/item' component={CardPage} />
        <Route path='/profile' component={Profile} />
        <Route path='/blog/:id' component={BlogPostPage} />
        <Route path='/categories' component={Categories} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
