import React, { PropTypes } from 'react';
import LoadingSpinner from '../loadingSpinner/loading-spinner';
import classNames from 'classnames';
import './user-report-card.css';

const reportCard = ({report, downloadHandler}) => {
  const onDownloadClick = () => downloadHandler(report);
  const getDownloadBtnClassName = () => classNames('reportCard-bodyDownload', {'reportCard-bodyDownload_downloading': report.get('isDownloading')})
  const renderLoadingSpinner = () => {
    return ( <div className="reportCard-bodyDownloadSpinner"><LoadingSpinner /></div> )
  }

  return (
    <div className="reportCard">
      <div className="reportCard-header">{report.get('name')}</div>
      <div className="reportCard-body">
        <div className="reportCard-bodyDescription">
          <div className="reportCard-bodyDescription_font">{report.get('description')}</div>
        </div>
        <div className={getDownloadBtnClassName()}>
          {report.get('isDownloading') && renderLoadingSpinner()}
          <span className="actionLink" onClick={onDownloadClick}>Download</span>
        </div>
      </div>
    </div>
  )
}

reportCard.propTypes = {
  report: PropTypes.object.isRequired,
  downloadHandler: PropTypes.func.isRequired
}

export default reportCard;
