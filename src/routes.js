import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app.container';
import Home from './components/home.component';
import Influencers from './containers/influencers.container';
import { setRoute } from './actions/route.actions';

/*
 * Each of these enter/exit handlers should be bound to the redux store object,
 * thus having the ability to call dispatch
*/

function onEnterInfluencers() {
  this.dispatch(setRoute('influencers'));
}

function onEnterHome() {
  this.dispatch(setRoute('home'));
}

export default function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}  onEnter={onEnterHome.bind(store)} />
      <Route path="influencers" component={Influencers} onEnter={onEnterInfluencers.bind(store)}/>
    </Route>
  );
}
