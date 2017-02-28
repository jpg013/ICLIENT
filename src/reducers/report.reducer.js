import InitialState from './initial-state';
import { LOGIN_SUCCESS, HYDRATE_USER } from '../actions/types';
import { List, Map } from 'immutable';

const defaultState = InitialState.get('reportSets');

const mapReportSets = reportSets => {
  return List(reportSets.map(cur => {
    return Map({
      name: cur.name,
      isDownloading: false,
      createdDate: cur.createdDate,
      reports: List(cur.reports.map(x => Map(x)))
    });
  }));
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case HYDRATE_USER:
    case LOGIN_SUCCESS:
      return mapReportSets(action.user.team.reportSets);
    default:
      return state;
  }
}
