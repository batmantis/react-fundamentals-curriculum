import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx'
import Forecast from '../components/Forecast.jsx'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forecast/:location' component={Forecast} />
    </Route>
  </Router>
);

export default routes;
