import InitialState from './initial-state';
import { is } from 'immutable';
import { OPEN_ADMIN_DOCK, CLOSE_ADMIN_DOCK } from '../actions/types';

const defaultState = InitialState.get('adminDock');

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_ADMIN_DOCK:
      return state.withMutations(state => {
        if (!action.model) {
          state.set('updatedModel', undefined);
          state.set('originalModel', undefined);
          state.set('isOpen', false);
        } else {
          state.set('updatedModel', action.model);
          state.set('originalModel', action.model);
          state.set('isOpen', true);
        }
      });
    case CLOSE_ADMIN_DOCK:
      return state.withMutations(state => {
        state.set('updatedModel', undefined);
        state.set('originalModel', undefined);
        state.set('isOpen', false);
      });
    default:
      return state;
  }
}
