import InitialState from './initial-state';
import { Map } from 'immutable';
import { IO_SYNC_USER, REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_LOGOUT, HYDRATE_APP } from '../actions/types';

const defaultState = InitialState.get('auth');

const buildUserMap = user => {
  const {createdDate, email, firstName, lastName, role, team} = user;
  return Map({
    createdDate,
    email,
    firstName,
    lastName,
    role,
    team: Map({
      createdDate: team.createdDate,
      name: team.name,
    })
  });
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case HYDRATE_APP:
      if (action.data.user) {
        state = state.set('user', buildUserMap(action.data.user));
      }
      return state.set('isAuthenticated', !!action.data.authToken);
    case LOGIN_SUCCESS:
      return state.withMutations(val => {
        val.set('isFetching', false);
        val.set('error', undefined);
        val.set('user', buildUserMap(action.user));
        val.set('isAuthenticated', true);
      });
    case REQUEST_LOGIN:
      return state.set('isFetching', true);
    case LOGIN_FAILURE:
      return state.set('isFetching', false).set('error', action.message);
    case REQUEST_LOGOUT:
      return defaultState;
    case IO_SYNC_USER:
      return action.user ? state.set('user', buildUserMap(action.user)) : defaultState;
    default:
      return state;
  }
}
