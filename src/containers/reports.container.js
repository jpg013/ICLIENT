import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { downloadReport } from '../actions/reporting.actions';
import ReportSet from '../views/reports/report-set';
import './reports.container.css';

class Reports extends Component {
  render() {
    const reportSets = this.props.reportSets.toArray();
    const buildReportSet = reportSet => <ReportSet key={reportSet.get('name')} reportSet={reportSet} downloadReport={(report, reportSet) => this.props.downloadReport(report, reportSet)} />
    const renderReportSets = () => reportSets.map(cur => buildReportSet(cur) );

    return (
      <div className="reports">
        <div className="reportsList">
          <div className="reportsHeader">
            <span className="reportsHeader-title">Reporting</span>
          </div>

          <div className="reportsBody">
            <div className="reportsBody-scrollable">
              {renderReportSets()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Reports.propTypes = {
  reportSets: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    reportSets: state.getIn(['reporting', 'reportSets']),
    user: state.getIn(['auth', 'user'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    downloadReport: (report, reportSet) => dispatch(downloadReport(report, reportSet))
  }
}

const ConnectedReports = connect(mapStateToProps, mapDispatchToProps)(Reports);
export default ConnectedReports;
