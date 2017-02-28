import InitialState from './initial-state';
import { Map, List } from 'immutable';
import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_LOGOUT } from '../actions/types';

const defaultState = InitialState.get('auth');

const mapUserObjectToImmutableMap = user => {
  if (!user) { return Map(); }
  const {createdDate, email, firstName, lastName, role, team} = user;
  const reportSets =  team.reportSets;
  const userMap = Map({
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

  const reportSetsArray = team.reportSets.map(cur => {
    return Map({
      name: cur.name,
      createdDate: cur.createdDate,
      reports: List(cur.reports.map(x => Map(x)))
    })
  })
  return userMap.setIn(['team', 'reportSets'], List(reportSetsArray));
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'HYRDATE_USER':
      return defaultState.set('user', mapUserObjectToImmutableMap(action.user));
    case LOGIN_SUCCESS:
      return state.set('isFetching', false).set('error', undefined).set('user', mapUserObjectToImmutableMap(action.user));
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
