import InitialState  from './initial-state';
import * as types from '../constants/action-types';

export default function (state = InitialState.get('graphFilter'), action) {
  switch (action.type) {
    case types.GRAPH_FILTER_STATE:
      const currentState = state.get('state');
      return state.set('state', currentState === 'closed' ? 'open' : 'closed');
    default:
      return state;
  }
}
