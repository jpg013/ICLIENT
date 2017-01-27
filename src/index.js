import React from 'react';
import { render } from 'react-dom';
import getRoutes from './routes';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import './index.css';

const store = configureStore();
const routes = getRoutes(store);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>,
  document.getElementById('root')
);
