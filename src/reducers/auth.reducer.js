import InitialState from './initial-state';
import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_LOGOUT } from '../actions/types';

const defaultState = InitialState.get('auth')

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'HYRDATE_USER':
      return defaultState.set('user', action.user);
    case LOGIN_SUCCESS:
      return state.set('isFetching', false).set('error', undefined).set('user', action.user);
    case REQUEST_LOGIN:
      return state.set('isFetching', true);
    case LOGIN_FAILURE:
      return state.set('isFetching', false).set('error', action.message);
    case REQUEST_LOGOUT:
      return defaultState;
    default:
      return state;
  }
}
