import InitialState from './initial-state';
import * as types from '../constants/action-types';

const defaultState = InitialState.get('route');

export default function (state = defaultState, action) {
  switch (action.type) {
    case types.SET_ROUTE:
      return state.set('name', action.payload);
    default:
      return state;
  }
}
