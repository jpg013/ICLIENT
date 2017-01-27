import { combineReducers } from 'redux';
import DockReducer from './dock.reducer';
import GraphFilterReducer from './graph-filter.reducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  dock: DockReducer,
  graphFilter: GraphFilterReducer
});

export default rootReducer;
