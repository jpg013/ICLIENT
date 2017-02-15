import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import MainLayout from './layouts/main-layout';
import EmptyLayout from './layouts/empty-layout';
import Home from './views/home.view';
import Login from './views/login'
import './index.css';

const store = configureStore();

const onEnterMainLayout = () => {
  alert('enter main component');
}

const onEnterEmptyLayout = () => {
  alert('enter empty component');
}

const onEnterBrowserHistory = () => {
  alert('on enter browser history');
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
      </Route>
      <Route component={EmptyLayout}>
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
