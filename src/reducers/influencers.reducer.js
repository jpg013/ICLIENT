import InitialState  from './initial-state';
import * as types from '../actions/types';

const defaultState = InitialState.get('influencers');

export default function (state = defaultState, action) {
  switch (action.type) {
    case types.INFLUENCERS_TYPE:
      return state.setIn(['influencers', 'type'], action.payload);
    default:
      return state;
  }
}
