import InitialState from './initial-state';
import { Map, List, OrderedMap } from 'immutable';
import { REQUEST_TEAMS, RECEIVE_TEAMS, REQUEST_ADD_TEAM, RECEIVE_ADD_TEAM, OPEN_ADMIN_SLIDER, CLOSE_ADMIN_SLIDER, REQUEST_DELETE_TEAM, RECEIVE_EDIT_TEAM } from '../actions/types';

const defaultState = InitialState.get('admin');

const buildTeamMap = data => {
  const createdDate = new Date(data.createdDate);
  const {id, userCount, name, reportCount, reportSetCount, neo4jAuth, neo4jConnection} = data;
  return Map({
    id,
    userCount,
    name,
    reportCount,
    createdDate,
    reportSetCount,
    neo4jAuth,
    neo4jConnection
  });
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return state.setIn(['teams', 'isLoading'], true);
    case RECEIVE_TEAMS:
      const teamList = action.teams.map(buildTeamMap);
      const teams = teamList.reduce((acc, cur) => {
        return acc.set(cur.get('id'), cur);
      }, OrderedMap());
      return state.setIn(['teams', 'isLoading'], false).setIn(['teams', 'list'], teams);
    case RECEIVE_ADD_TEAM:
      state = state.setIn(['slider', 'status'], 'success');
      return state.updateIn(['teams', 'list'], val => val.set(action.team.id, buildTeamMap(action.team)));
    case OPEN_ADMIN_SLIDER:
      const slider = defaultState.get('slider').withMutations(val => {
        val.set('name', action.name);
        val.set('data', action.data)
      });
      return state.set('slider', slider);
    case CLOSE_ADMIN_SLIDER:
      return state.set('slider', defaultState.get('slider'));
    case REQUEST_ADD_TEAM:
      return state.setIn(['slider', 'status'], 'submitting');
    case REQUEST_DELETE_TEAM:
      return state.updateIn(['teams', 'list'], val => val.delete(action.id))
    case RECEIVE_EDIT_TEAM:
      debugger;
      return state.updateIn(['teams', 'list', action.team.id], cur => {
        debugger;
        const update = Map(action.team);
        cur = cur.merge(update);
        debugger;
        return cur;
      })
    default:
      return state;
  }
}
