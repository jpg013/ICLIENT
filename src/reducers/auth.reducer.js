import InitialState from './initial-state';
import { buildUserModel } from '../services/users.service';
import { SOCKET_SYNC_USER, REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_LOGOUT, HYDRATE_APP } from '../actions/types';

const defaultState = InitialState.get('auth');

export default function (state = defaultState, action) {
  switch (action.type) {
    case HYDRATE_APP:
      if (action.data.user) {
        state = state.set('user', buildUserModel(action.data.user));
      }
      if (action.data.authToken) {
        state.set('status', 'authenticated');
      }
      return state;
    case LOGIN_SUCCESS:
      debugger;
      return state.withMutations(val => {
        val.set('status', 'authenticated');
        val.set('user', buildUserModel(action.user));
      });
    case REQUEST_LOGIN:
      return state.set('status', 'authenticating');
    case LOGIN_FAILURE:
      debugger;
      return state.set('status', 'error');
    case SOCKET_SYNC_USER:
      return action.user ? state.set('user', buildUserModel(action.user)) : state;
    case REQUEST_LOGOUT:
      return defaultState;
    default:
      return state;
  }
}
