import InitialState from './initial-state';
import * as types from '../actions/types';

export default function (state = InitialState.get('dock'), action) {
  switch (action.type) {
    case types.DOCK_STATE:
      return state.set('state', action.payload);
    default:
      return state;
  }
}
