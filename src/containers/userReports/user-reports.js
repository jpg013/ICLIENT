import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { downloadReport } from '../../actions/reporting.actions';
import UserReportCollection from '../../components/reports/user-report-collection';
import './user-reports.css';

class UserReports extends Component {
  render() {
    const userReportCollections = this.props.reportCollections.toArray();
    const buildReportCollectionComponent = collection => {
      return (
        <UserReportCollection
          key={collection.get('name')}
          reportCollection={collection}
          downloadReport={(report, collection) => this.props.downloadReport(report, collection)}
          />
      );
    }
    const renderReportCollections = () => userReportCollections.map(cur => buildReportCollectionComponent(cur));

    return (
      <div className="userReports">
        <div className="userReportsList">
          <div className="userReportsList-header">
            <span className="userReportsList-header_title">Reporting</span>
          </div>

          <div className="userReportsBody">
            <div className="userReportsBody-scrollable">
              {renderReportCollections()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserReports.propTypes = {
  reportSets: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    reportCollections: state.getIn(['userReports', 'collections']),
    user: state.getIn(['auth', 'user'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    downloadReport: (report, reportSet) => dispatch(downloadReport(report, reportSet))
  }
}

const ConnectedUserReports = connect(mapStateToProps, mapDispatchToProps)(UserReports);
export default ConnectedUserReports;
