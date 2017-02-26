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
          <ReportsBody />
        </div>
      </div>
    );
  }
}

Reports.propTypes = {

}

const mapStateToProps = state => {
  return {

  };
}

const ConnectedReports = connect(mapStateToProps)(Reports);
export default ConnectedReports;
