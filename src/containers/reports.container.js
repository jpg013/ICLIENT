import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReportsHeader from '../views/reports/reports-header';
import ReportsBody from '../views/reports/reports-body';
import './reports.container.css';

class Reports extends Component {
  render() {
    return (
      <div className="reports-container">
        <div className="reports-list">
          <ReportsHeader />
          <ReportsBody reportSets={this.props.reportSets} />
        </div>
      </div>
    );
  }
}

Reports.propTypes = {
  reportSets: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    reportSets: state.getIn(['auth', 'user', 'team', 'reportSets'])
  };
}

const ConnectedReports = connect(mapStateToProps)(Reports);
export default ConnectedReports;
