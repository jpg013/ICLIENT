import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReportCard from './report-card';
import './report-set.css';

class ReportSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,
      reportSetElement: undefined
    }
  }

  toggleReportSet() {
    const closed = !this.state.closed;
    this.setState({closed})
  }

  getReportSetInlineStyle() {
    if (!this.state.reportSetElement || this.state.closed) { return {} };
    const headerHeight = this.state.reportSetElement.children[0].getBoundingClientRect().height;
    const bodyHeight = this.state.reportSetElement.children[1].getBoundingClientRect().height;
    const fullHeight = headerHeight + bodyHeight + 20;
    return {height: `${fullHeight}px`};
  }

  getArrowClassName() {
    return classNames('reportSet-headerArrow', {'reportSet-headerArrow_closed': this.state.closed});
  }

  reportSetRef(input) {
    if (this.state.reportSetElement) { return; }
    this.setState({'reportSetElement': input});
  }

  render() {
    const reportList = this.props.reportSet.get('reports').toArray();
    const buildReportCard = report => <ReportCard key={report.get('_id')}  report={report} downloadHandler={report => this.props.downloadReport(report, this.props.reportSet)} />
    const renderReportCards = () => reportList.map(cur => buildReportCard(cur))

    return (
      <div className='reportSet' style={this.getReportSetInlineStyle()} ref={ref => this.reportSetRef(ref)}>
        <div className="reportSet-header">
          <div className={this.getArrowClassName()} onClick={() => this.toggleReportSet()}></div>
          <div className="reportSet-header_text" onClick={() => this.toggleReportSet()}>{this.props.reportSet.get('name')}</div>
        </div>
        <div className="reportSet-body">
          {renderReportCards()}
        </div>
      </div>
    );
  }
}

ReportSet.propTypes = {
  reportSet: PropTypes.object.isRequired,
  downloadReport: PropTypes.func.isRequired
}

export default ReportSet;
