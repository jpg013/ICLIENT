import { REQUEST_TEAMS, RECEIVE_TEAMS, REQUEST_ADD_TEAM, RECEIVE_ADD_TEAM, ERROR_ADD_TEAM } from './types';
import { callApi } from '../middleware/api';
import { getSaveProps, buildTeamModel } from '../services/teams.service';

const requestTeams = () => ({ type: REQUEST_TEAMS });
const receiveTeams = teams => ({ type: RECEIVE_TEAMS, teams: teams });
const requestAddTeam = teamModel => ({ type: REQUEST_ADD_TEAM, model: teamModel });
const receiveAddTeam = teamModel => ({ type: RECEIVE_ADD_TEAM, teamModel });
const errorAddTeam = (error, teamModel) => ({type: ERROR_ADD_TEAM, error, teamModel});

const fetchTeams = () => {
  return dispatch => {
    dispatch(requestTeams())
    const teamsPromise = callApi('teams', 'get')
      .then(function(resp) {
        setTimeout(function() {
          dispatch(receiveTeams(resp.data));
        }, 1500);
      })
  }
}

const addTeam = teamModel => {
  return dispatch => {
    dispatch(requestAddTeam(teamModel));
    const addTeamPromise = callApi('teams', 'post', { body: getSaveProps(teamModel) })
      .then(function(resp) {
        if (!resp.success) {
          return dispatch(errorAddTeam(resp.msg, teamModel));
        }
        const persistedTeamModel = teamModel.merge(buildTeamModel(resp.data));
        dispatch(receiveAddTeam(persistedTeamModel));
      });
  }
}

export {
  fetchTeams,
  addTeam,
  errorAddTeam
}
