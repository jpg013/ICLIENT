import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './graph-filter.component.css';
import classNames from 'classnames';

const GraphFilter = ({handleFilterClick}) => {
  function getGraphFilterClassName() {
    return ('graphFilter graphFilter-closed');

    /*
    return classNames(
      'graphFilter',
       {'graphFilter-closed': this.state.position === 'closed'},
       {'graphFilter-open': this.state.position === 'open'}
    );
    */
  }

  function renderAllFilters() {
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

  return (
    <div className="graphFilter-container">
      <div className={getGraphFilterClassName()}>
        <div className="graphFilter-header" onClick={handleFilterClick}>Add Filter Data</div>
        {renderAllFilters()}
      </div>
    </div>
  )
}

GraphFilter.PropTypes = {
  handleFilterClick: PropTypes.func.isRequired
};

export default GraphFilter;
