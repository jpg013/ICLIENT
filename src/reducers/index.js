import DockReducer from './dock.reducer';
import GraphFilterReducer from './graph-filter.reducer';
import InfluencersReducer from './influencers.reducer';
import RouteReducer from './route.reducer';
import SubjectCarouselReducer from './subject-carousel.reducer';
import AuthReducer from './auth.reducer'
import ReportingReducer from './reporting.reducer';
import AdminReducer from './admin.reducer';
import SocketRoomsReducer from './socket-rooms.reducer';

import InitialState from './initial-state';
import { Map } from 'immutable';

const reducers = Map({
  auth: AuthReducer,
  reporting: ReportingReducer,
  admin: AdminReducer
});

const rootReducer = (state = InitialState, action) => {
  reducers.forEach((reducer, key) => {
    const oldState = state.get(key);
    const newState = reducer(oldState, action);
    state = state.set(key, newState);
  });
  return state;
}

export default rootReducer;
