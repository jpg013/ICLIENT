import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { hydrateApp } from './actions/app';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import MainLayout from './layouts/main-layout';
import EmptyLayout from './layouts/empty-layout';
import Reports from './containers/reports.container';
import Login from './views/login/login'
import Logout from './views/logout/index'
import { connectSocket } from './middleware/socket';
import { getAuthToken } from './services/storage.service';
import './index.css';

/**
 * Create redux store
 */
const store = configureStore();

/**
 * hydrate the app
 */
store.dispatch(hydrateApp({authToken: getAuthToken()}));

connectSocket(store.dispatch);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainLayout} onEnter={requireAuth}>
        <Route path="/" component={Reports} />
      </Route>
      <Route component={EmptyLayout}>
        <Route path="/login" component={Login} onEnter={unauthorizedOnly} />
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


function isAuthenticated() {
  return store.getState().getIn(['auth', 'isAuthenticated']);
}

function requireAuth (nextState, replace) {
  if (!isAuthenticated()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function unauthorizedOnly(nextState, replace) {
  if (isAuthenticated()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
