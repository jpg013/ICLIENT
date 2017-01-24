import React, { Component } from 'react';
import { Link } from 'react-router';
import './graph-filter.component.css';
import classNames from 'classnames';

class GraphFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'closed'
    }
  }

  componentWillUpdate(nextProps, nextState) {

  }

  onHeaderClick() {
    this.setState({
      'position': this.state.position === 'open' ? 'closed' : 'open'
    });
  }

  getGraphFilterClassName() {
    return classNames(
      'graphFilter',
       {'graphFilter-closed': this.state.position === 'closed'},
       {'graphFilter-open': this.state.position === 'open'}
    );
  }

  renderAllFilters() {
    return (
      <div className="graphFilters-filterBody">
        <div className="regularCheckbox graphFilter-filterCheckbox">
  	  		<input type="checkbox" value="1" id="geography-filter-checkbox" name="geography-filter-checkbox" />
  		  	<label htmlFor="geography-filter-checkbox"></label>
          <span className="graphFilter-filterCheckbox_label">Geography</span>
  	  	</div>
        <div className="regularCheckbox graphFilter-filterCheckbox">
  	  		<input type="checkbox" value="1" id="giving-filter-checkbox" name="geography-filter-checkbox" />
  		  	<label htmlFor="giving-filter-checkbox"></label>
          <span className="graphFilter-filterCheckbox_label">Giving</span>
  	  	</div>
        <div className="regularCheckbox graphFilter-filterCheckbox">
  	  		<input type="checkbox" value="1" id="volunteerism-filter-checkbox" name="geography-filter-checkbox" />
  		  	<label htmlFor="volunteerism-filter-checkbox"></label>
          <span className="graphFilter-filterCheckbox_label">Volunteerism</span>
  	  	</div>
      </div>
    )
  }

  renderSelectedFilters() {

  }

  render() {
    const graphFilterClassName = this.getGraphFilterClassName();

    return (
      <div className="graphFilter-container">
        <div className={graphFilterClassName}>
          <div className="graphFilter-header" onClick={this.onHeaderClick.bind(this)}>Add Filter Data</div>
          {this.renderAllFilters()}
        </div>
      </div>
    )
  }
}

export default GraphFilter;
