import { createStore } from 'redux';
import RootReducer from '../reducers';

const configureStore = () => createStore(RootReducer);
export default configureStore;
