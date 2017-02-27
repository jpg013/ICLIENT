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

    const fullHeight =
      this.state.reportSetElement.getBoundingClientRect().height +
      this.state.reportSetElement.children[1].getBoundingClientRect().height + 20;
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
    return (
      <div className='reportSet' style={this.getReportSetInlineStyle()} ref={ref => this.reportSetRef(ref)}>
        <div className="reportSet-header">
          <div className={this.getArrowClassName()} onClick={() => this.toggleReportSet()}></div>
          <div className="reportSet-header_text">{this.props.reportName || 'Name of report category'}</div>
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
    );
  }
}

ReportSet.propTypes = {
  reportName: PropTypes.string
}

export default ReportSet;
