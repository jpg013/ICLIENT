import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app.container';
import Home from './components/home.component';
import Influencers from './containers/influencers.container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="influencers" component={Influencers} />
  </Route>
);
