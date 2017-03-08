import { REQUEST_TEAMS, RECEIVE_TEAMS } from './types';
import { Observable } from 'rxjs/Observable';
import { callApi } from '../middleware/api';

const requestTeams = () => ({ type: REQUEST_TEAMS });
const receiveTeams = teams => ({ type: RECEIVE_TEAMS, teams: teams });

const fetchTeams = () => {
  const config = Object.assign({}, {
    method: "GET",
    url: "team"
  });

  return dispatch => {
    dispatch(requestTeams())
    const subscribe = callApi(config).subscribe(resp => {
      subscribe.unsubscribe();
      dispatch(receiveTeams(resp.data));
    });
  }
}

export {
  fetchTeams
}
