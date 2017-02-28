import InitialState from './initial-state';
import { Map } from 'immutable';
import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_LOGOUT, HYDRATE_USER } from '../actions/types';

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
    case HYDRATE_USER:
      return defaultState.set('user', buildUserMap(action.user));
    case LOGIN_SUCCESS:
      return state.set('isFetching', false).set('error', undefined).set('user', buildUserMap(action.user));
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
