import { REQUEST_EDIT_TEAM, RECEIVE_EDIT_TEAM, REQUEST_TEAMS, RECEIVE_TEAMS, REQUEST_ADD_TEAM, RECEIVE_ADD_TEAM, OPEN_ADMIN_SLIDER, CLOSE_ADMIN_SLIDER, REQUEST_DELETE_TEAM } from './types';
import { callApi } from '../middleware/api';
import { getSaveProps } from '../services/teams.service';

const requestTeams = () => ({ type: REQUEST_TEAMS });
const receiveTeams = teams => ({ type: RECEIVE_TEAMS, teams: teams });
const requestAddTeam = teamModel => ({ type: REQUEST_ADD_TEAM, model: teamModel });
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

const addTeam = teamModel => {
  return dispatch => {
    dispatch(requestAddTeam(teamModel));
    return;
    const addTeamPromise = callApi('teams', 'post', { body: getSaveProps(teamModel) })
      .then(function(resp) {
        debugger;
        //dispatch(receiveAddTeam(resp.data));
      })
  }
}

export {
  fetchTeams,
  addTeam
}
