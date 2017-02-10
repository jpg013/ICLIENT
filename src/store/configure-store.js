import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default configureStore;
