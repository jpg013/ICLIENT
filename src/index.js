import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import './index.css';

render(
  <Router history={browserHistory} routes={routes}></Router>,
  document.getElementById('root')
);
