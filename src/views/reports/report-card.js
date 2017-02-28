import React, { PropTypes } from 'react';
import './report-card.css';

const reportCard = ({report, downloadHandler}) => {
  return (
    <div className="reportCard">
      <div className="reportCard-header">{report.get('name')}</div>
      <div className="reportCard-body">
        <div className="reportCard-bodyDescription">
          <div className="reportCard-bodyDescription_font">{report.get('description')}</div>
        </div>
        <div className="reportCard-bodyDownload">
          <span className="actionLink">Download</span>
        </div>
      </div>
    </div>
  )
}

reportCard.propTypes = {
  report: PropTypes.object.isRequired,
  downloadHandler: PropTypes.func.isRequired,
  isDownloading: PropTypes.bool
}

export default reportCard;
