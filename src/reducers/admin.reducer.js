import InitialState from './initial-state';
import { Map, List } from 'immutable';
import { REQUEST_TEAMS, RECEIVE_TEAMS } from '../actions/types';

const defaultState = InitialState.get('admin');

const buildTeamMap = data => {
  return Map({
    createdDate: new Date(data.createdDate),
    id: data.id,
    name: data.name,
    reportCount: data.reportCount,
    reportSetCount: data.reportSetCount
  });
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return state.setIn(['teams', 'isLoading'], true);
    case RECEIVE_TEAMS:
      const teamList = List(action.teams.map(buildTeamMap));
      return state.setIn(['teams', 'isLoading'], false).setIn(['teams', 'list'], teamList);
    default:
      return state;
  }
}
