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
    setTimeout(function() {
      dispatch(receiveReportDownload(report, reportSet));
    }, 2500);
    const config = Object.assign({}, {
      method: "POST",
      url: "report",
      body: { report }
    });
    /*
    const subscribe = callAPi(config).subscribe(resp => {
      debugger;
      console.log(resp)
    })
    */
  }
}

export {
  downloadReport
}
