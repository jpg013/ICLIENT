import InitialState from './initial-state';
import { Map, List, OrderedMap } from 'immutable';
import { REQUEST_TEAMS, RECEIVE_TEAMS } from '../actions/types';

const defaultState = InitialState.get('adminTeams');

const buildTeamMap = data => {
  const createdDate = new Date(data.createdDate);
  const {id, userCount, name, reportCount, reportCollectionCount, neo4jAuth, neo4jConnection} = data;
  return Map({
    id,
    userCount,
    name,
    reportCount,
    createdDate,
    reportCollectionCount,
    neo4jAuth,
    neo4jConnection
  });
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return state.set('isLoading', true);
    case RECEIVE_TEAMS:
      debugger;
      const teamCollection = action.teams.map(buildTeamMap)
        .reduce((acc, cur) => {
          return acc.set(cur.get('id'), cur);
        }, OrderedMap());
      return state.set('collection', teamCollection).set('isLoading', false);
    default:
      return state;
  }
}
