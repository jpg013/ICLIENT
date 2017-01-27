import InitialState  from './initial-state';
import * as types from '../constants/action-types';

export default function (state = InitialState.get('graphFilter'), action) {
  switch (action.type) {
    case types.GRAPH_FILTER_STATE:
      return state.set('state', action.payload);
    default:
      return state;
  }
}
