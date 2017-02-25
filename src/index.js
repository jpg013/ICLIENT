import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import MainLayout from './layouts/main-layout';
import EmptyLayout from './layouts/empty-layout';
import Home from './views/home.view';
import Login from './views/login/login'
import Logout from './views/logout/index'
import './index.css';

const store = configureStore();
const authUser = localStorage.getItem('auth_user');

if (authUser) {
  store.dispatch({type: 'HYRDATE_USER', user: JSON.parse(authUser)});
}

const userExists = () => !!store.getState().getIn(['auth', 'user']);

const requireAuth = (nextState, replace) => {
  if (!userExists()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const unauthorizedOnly = (nextState, replace) => {
  if (userExists()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainLayout} onEnter={requireAuth}>
        <Route path="/" component={Home} />
      </Route>
      <Route component={EmptyLayout}>
        <Route path="/login" component={Login} onEnter={unauthorizedOnly} />
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
