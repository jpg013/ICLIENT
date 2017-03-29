import InitialState from './initial-state';
import { OPEN_ADMIN_DOCK, CLOSE_ADMIN_DOCK, REQUEST_ADD_TEAM } from '../actions/types';

const defaultState = InitialState.get('adminDock');

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_ADMIN_DOCK:
      return state.withMutations(state => {
        if (!action.model) {
          state.set('persistedModel', undefined);
          state.set('isOpen', false);
        } else {
          state.set('persistedModel', action.model);
          state.set('isOpen', true);
        }
      });
    case CLOSE_ADMIN_DOCK:
      return state.withMutations(state => {
        state.set('persistedModel', undefined);
        state.set('isOpen', false);
      });
    default:
      return state;
  }
}
