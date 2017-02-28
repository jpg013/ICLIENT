import React, { PropTypes } from 'react';
import ReportSet from './report-set';
import './reports-body.css';

const reportsBody = ({reportSets}) => {
  const renderReportSets = () => reportSets.map(cur => <ReportSet key={cur.get('name')} reportSet={cur}/> );

  return (
    <div className="reportsBody">
      <div className="reportsBody-scrollable">
        {renderReportSets()}
      </div>
    </div>
  )
}

reportsBody.PropTypes = {
  reportSets: PropTypes.object.isRequired
}

export default reportsBody;
