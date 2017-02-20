import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import About from './components/about/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <About path='about' component={About} />
  </Route>
);
