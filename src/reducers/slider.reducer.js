import InitialState from './initial-state';
import { is } from 'immutable';
import { OPEN_SLIDER, CLOSE_SLIDER, REQUEST_CREATE_USER, RECEIVE_CREATE_USER } from '../actions/types';

const defaultState = InitialState.get('slider');

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_SLIDER:
      return state.withMutations(val => {
        val.set('name', action.name);
        val.set('model', action.model);
      });
    case REQUEST_CREATE_USER:
      return state.update('model', val => val.merge(action.userModel).set('state', 'persisting'));
    case RECEIVE_CREATE_USER:
      return state.set('model', action.userModel);
    case CLOSE_SLIDER:
      return defaultState;
    default:
      return state;
  }
}
