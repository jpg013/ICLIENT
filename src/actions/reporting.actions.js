import { REQUEST_DOWNLOAD_REPORT, RECEIVE_DOWNLOAD_REPORT } from './types';
import { callApi } from '../middleware/api';

const requestReportDownload = (report, reportSet) => {
  return {
    type: REQUEST_DOWNLOAD_REPORT,
    report,
    reportSet
  };
}

const receiveReportDownload = (report, reportSet) => {
  return {
    type: RECEIVE_DOWNLOAD_REPORT,
    report,
    reportSet
  }
}

const downloadReport = (report, reportSet) => {
  return dispatch => {
    dispatch(requestReportDownload(report, reportSet));
    const config = Object.assign({}, {
      method: "POST",
      url: "report/download",
      body: {
        reportId: report.get('_id'),
        reportSetId: reportSet.get('_id')
      }
    });
    const subscribe = callApi(config).subscribe(resp => {
      subscribe.unsubscribe();
      dispatch(receiveReportDownload(report, reportSet));
    })
  }
}

export {
  downloadReport
}
