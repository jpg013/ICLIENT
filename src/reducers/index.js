import DockReducer from './dock.reducer';
import GraphFilterReducer from './graph-filter.reducer';
import InfluencersReducer from './influencers.reducer';
import RouteReducer from './route.reducer';
import SubjectCarouselReducer from './subject-carousel.reducer';
import AuthReducer from './auth.reducer'

import InitialState from './initial-state';
import { Map } from 'immutable';

const reducers = Map({
  dock: DockReducer,
  graphFilter: GraphFilterReducer,
  influencers: InfluencersReducer,
  route: RouteReducer,
  subjectCarousel: SubjectCarouselReducer,
  auth: AuthReducer
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
