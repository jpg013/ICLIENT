import React, { PropTypes } from 'react';
import ReportCard from './report-card';
import './report-set.css';

const reportSet = ({reportName}) => {
  return (
    <div className="reportSet">
      <div className="reportSet-header">
        <div className="reportSet-headerArrow"></div>
        <div className="reportSet-header_text">{reportName || 'Name of report category'}</div>
      </div>
      <div className="reportSet-body">
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </div>
    </div>
  )
}

reportSet.propTypes = {
  reportName: PropTypes.string
}

export default reportSet;
