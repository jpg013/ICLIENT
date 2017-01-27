import { createStore } from 'redux';
import RootReducer from '../reducers';
import { Map } from 'immutable';

const configureStore = () => {
  return createStore(RootReducer);
};

export default configureStore;
