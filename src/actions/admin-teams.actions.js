import { REQUEST_EDIT_TEAM, RECEIVE_EDIT_TEAM, REQUEST_TEAMS, RECEIVE_TEAMS, REQUEST_ADD_TEAM, RECEIVE_ADD_TEAM, OPEN_ADMIN_SLIDER, CLOSE_ADMIN_SLIDER, REQUEST_DELETE_TEAM } from './types';
import { callApi } from '../middleware/api';

const requestTeams = () => ({ type: REQUEST_TEAMS });
const receiveTeams = teams => ({ type: RECEIVE_TEAMS, teams: teams });
const requestAddTeam = () => ({ type: REQUEST_ADD_TEAM });
const receiveAddTeam = team => ({ type: RECEIVE_ADD_TEAM, team });

const fetchTeams = () => {
  return dispatch => {
    dispatch(requestTeams())
    const teamsPromise = callApi('teams', 'get')
      .then(function(resp) {
        setTimeout(function() {
          dispatch(receiveTeams(resp.data));
        }, 2000);
      })
  }
}

const addTeam = teamData => {
  return dispatch => {
    dispatch(requestAddTeam());
    const addTeamPromise = callApi('teams', 'post', teamData)
      .then(function(resp) {
        dispatch(receiveAddTeam(resp.data));
      })
  }
}

export {
  fetchTeams,
  addTeam
}
