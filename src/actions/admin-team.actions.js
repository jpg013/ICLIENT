import { REQUEST_EDIT_TEAM, RECEIVE_EDIT_TEAM, REQUEST_TEAMS, RECEIVE_TEAMS, REQUEST_ADD_TEAM, RECEIVE_ADD_TEAM, OPEN_ADMIN_SLIDER, CLOSE_ADMIN_SLIDER, REQUEST_DELETE_TEAM } from './types';
import { callApi } from '../middleware/api';

const requestTeams = () => ({ type: REQUEST_TEAMS });
const receiveTeams = teams => ({ type: RECEIVE_TEAMS, teams: teams });
const requestAddTeam = () => ({ type: REQUEST_ADD_TEAM });
const receiveAddTeam = team => ({ type: RECEIVE_ADD_TEAM, team });
const requestEditTeam = () => ({ type: REQUEST_EDIT_TEAM });
const receiveEditTeam = team => ({ type: RECEIVE_EDIT_TEAM, team });
const openAdminSlider = (name, data) => ({type: OPEN_ADMIN_SLIDER, data, name});
const closeAdminSlider = data => ({type: CLOSE_ADMIN_SLIDER});
const requestDeleteTeam = id => ({type: REQUEST_DELETE_TEAM, id})

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

const createTeam = data => {
  const config = Object.assign({}, {body: data }, {
    method: "POST",
    url: "team"
  });

  return dispatch => {
    dispatch(requestAddTeam());
    let createTeamSubscribe = callApi(config).subscribe(resp => {
      if (!resp.success) { return; }
      dispatch(receiveAddTeam(resp.data));
    });
  }
}

const deleteTeam = id => {
  const config = Object.assign({}, {body: {id} }, {
    method: "DELETE",
    url: "team"
  });

  return dispatch => {
    dispatch(requestDeleteTeam(id));
    let deleteTeamSubscribe = callApi(config).subscribe(resp => {
      if (!resp.success) { return; }
    });
  }
}

const editTeam = data => {
  const config = Object.assign({}, {body: data}, {
    method: "PUT",
    url: "team"
  });

  return dispatch => {
    dispatch(requestEditTeam());
    const editTeamSubscribe = callApi(config).subscribe(resp => {
      if (!resp.success) { return; }
      dispatch(receiveEditTeam(resp.data));
    });
  }
}

export {
  fetchTeams,
  createTeam,
  deleteTeam,
  openAdminSlider,
  closeAdminSlider,
  editTeam
}
