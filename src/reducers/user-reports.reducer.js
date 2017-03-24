import InitialState from './initial-state';
import { SOCKET_SYNC_USER, LOGIN_SUCCESS, REQUEST_DOWNLOAD_REPORT, RECEIVE_DOWNLOAD_REPORT, HYDRATE_APP } from '../actions/types';
import { OrderedMap, Map } from 'immutable';

const defaultState = InitialState.get('userReports');

const buildReportList = reports => {
  return reports.reduce((acc, cur) => {
    const reportMap = Map(Object.assign({}, cur, {isDownloading: false}));
    return acc.set(cur._id, reportMap);
  }, OrderedMap());
}

const buildReportCollections = reportCollections => {
  return reportCollections.reduce((acc, cur) => {
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
      return state.updateIn(['reportCollections', action.reportSet.get('_id'), 'reports', action.report.get('_id')], cur => cur.set('isDownloading', false));
    case REQUEST_DOWNLOAD_REPORT:
      return state.updateIn(['reportCollections', action.reportSet.get('_id'), 'reports', action.report.get('_id')], cur => cur.set('isDownloading', true));
    case LOGIN_SUCCESS:
      return state.set('reportCollections', buildReportCollections(action.user.team.reportCollections));
    case SOCKET_SYNC_USER:
      return action.user ? state.set('reportCollections', buildReportCollections(action.user.team.reportCollections)) : defaultState;
    case HYDRATE_APP:
      return action.data.user ? state.set('reportCollections', buildReportCollections(action.data.user.team.reportCollections)) : state;
    default:
      return state;
  }
}
