import React from 'react';
import ReportSet from './report-set';
import './reports-body.css';

const reportsBody = () => {
  return (
    <div className="reportsBody">
      <div className="reportsBody-scrollable">
        <ReportSet />
      </div>
    </div>
  )
}

export default reportsBody;
