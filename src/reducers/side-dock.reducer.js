import InitialState from './initial-state';
import { is } from 'immutable';
import { OPEN_SIDE_DOCK, CLOSE_SIDE_DOCK } from '../actions/types';

const defaultState = InitialState.get('sideDock');

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_SIDE_DOCK:
      return state.set('originalModel', action.model).set('updatedModel', 'originModel');
    case CLOSE_SIDE_DOCK:
      return state.set('originalModel', undefined).set('updatedModel', undefined);
    default:
      return state;
  }
}
