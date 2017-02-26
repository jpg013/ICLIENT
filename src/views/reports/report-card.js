import React, { PropTypes } from 'react';
import './report-card.css';

const reportCard = ({reportName}) => {
  return (
    <div className="reportCard">
      <div className="reportCard-header">
        Name of Report Query
      </div>
      <div className="reportCard-body">
        <div className="reportCard-bodyDescription">
          <div className="reportCard-bodyDescription_font"> A brief description of the report query goes here in this div. A brief description of the report query goes here in this div. A brief description of the report query goes here in this div.</div>
        </div>
        <div className="reportCard-bodyDownload">
          <span className="reportCard-bodyDownload_link">Download</span>
        </div>
      </div>
    </div>
  )
}

reportCard.propTypes = {
  reportName: PropTypes.string
}

export default reportCard;
