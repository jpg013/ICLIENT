import InitialState from './initial-state';
import { OPEN_ADMIN_DOCK, CLOSE_ADMIN_DOCK, REQUEST_ADD_TEAM, RECEIVE_ADD_TEAM, ERROR_ADD_TEAM } from '../actions/types';

const defaultState = InitialState.get('adminDock');

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_ADMIN_DOCK:
      return state.withMutations(state => {
        if (!action.model) {
          state.set('model', undefined);
          state.set('isOpen', false);
          state.set('error', '');
        } else {
          state.set('model', action.model.set('state', 'dirty'));
          state.set('isOpen', true);
          state.set('error', '');
        }
      });
    case CLOSE_ADMIN_DOCK:
      return state.withMutations(state => {
        state.set('model', undefined);
        state.set('isOpen', false);
        state.set('error', '');
      });
    case REQUEST_ADD_TEAM:
      return state.withMutations(state => {
        state.set('model', action.model.set('state', 'persisting'));
        state.set('error', '');
      });
    case RECEIVE_ADD_TEAM:
      return state.set('model', action.teamModel);
    case ERROR_ADD_TEAM:
      return state.withMutations(state => {
        state.set('error', action.error);
        state.set('model', action.teamModel);
      })

      .set('error', action.error);
    default:
      return state;
  }
}
