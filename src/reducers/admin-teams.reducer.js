import InitialState from './initial-state';
import { Map, List, OrderedMap } from 'immutable';
import { REQUEST_TEAMS, RECEIVE_TEAMS } from '../actions/types';
import moment from 'moment';

const defaultState = InitialState.get('adminTeams');

const buildTeamMap = data => {
  const createdDate = new Date(data.createdDate);
  const formattedCreatedDate = moment(createdDate).format('MMMM Do, YYYY');
  const {id, userCount, name, reportCount, reportCollectionCount, neo4jAuth, neo4jConnection} = data;
  return Map({
    id,
    userCount,
    name,
    reportCount,
    createdDate,
    formattedCreatedDate,
    reportCollectionCount,
    neo4jAuth,
    neo4jConnection
  });
}

const sortTeamCollection = teamCollection => teamCollection.sort((a, b) => b.get('createdDate').getTime() < a.get('createdDate').getTime());

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return state.set('isLoading', true);
    case RECEIVE_TEAMS:
      const teamCollection = action.teams.map(buildTeamMap)
        .reduce((acc, cur) => {
          return acc.set(cur.get('id'), cur);
        }, OrderedMap());
      return state.set('collection', sortTeamCollection(teamCollection)).set('isLoading', false);
    default:
      return state;
  }
}
