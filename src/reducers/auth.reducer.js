import InitialState from './initial-state';
import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const defaultState = InitialState.get('auth')

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state.set('isFetching', true);
    case LOGIN_FAILURE:
      return state.set('isFetching', false).set('error', action.message);
    default:
      return state;
  }
}
