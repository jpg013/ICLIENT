import InitialState from './initial-state';
import { IO_SYNC_USER, LOGIN_SUCCESS, REQUEST_DOWNLOAD_REPORT, RECEIVE_DOWNLOAD_REPORT, HYDRATE_APP } from '../actions/types';
import { OrderedMap, Map } from 'immutable';

const defaultState = InitialState.get('reporting');

const buildReportList = reports => {
  return reports.reduce((acc, cur) => {
    const reportMap = Map(Object.assign({}, cur, {isDownloading: false}));
    return acc.set(cur._id, reportMap);
  }, OrderedMap());
}

const buildReportSets = reportSets => {
  return reportSets.reduce((acc, cur) => {
    const reportSetMap = Map({
      _id: cur._id,
      name: cur.name,
      createdDate: cur.createdDate,
      reports: buildReportList(cur.reports)
    });
    return acc.set(cur._id, reportSetMap);
  }, OrderedMap());
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_DOWNLOAD_REPORT:
      return state.updateIn(['reportSets', action.reportSet.get('_id'), 'reports', action.report.get('_id')], cur => cur.set('isDownloading', false));
    case REQUEST_DOWNLOAD_REPORT:
      return state.updateIn(['reportSets', action.reportSet.get('_id'), 'reports', action.report.get('_id')], cur => cur.set('isDownloading', true));
    case LOGIN_SUCCESS:
      return state.set('reportSets', buildReportSets(action.user.team.reportSets));
    case IO_SYNC_USER:
      return action.user ? state.set('reportSets', buildReportSets(action.user.team.reportSets)) : defaultState;
    case HYDRATE_APP:
      return action.data.user ? state.set('reportSets', buildReportSets(action.data.user.team.reportSets)) : state;
    default:
      return state;
  }
}
