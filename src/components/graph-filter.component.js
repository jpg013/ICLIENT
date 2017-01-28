import React, { PropTypes } from 'react';
import PlusIcon from '../icons/plus.icon';
import './graph-filter.component.css';
import classNames from 'classnames';

const GraphFilter = ({handleFilterClick, dockActive, graphFilter}) => {
  function getGraphFilterClassName() {
    if (!dockActive) {
      return ('graphFilter graphFilter-closed graphFilter-inactive');
    }
    return classNames(
      'graphFilter',
       {'graphFilter-closed': graphFilter.get('state') === 'closed'},
       {'graphFilter-open': graphFilter.get('state') === 'open'}
    );
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
        <div className="graphFilter-header" onClick={() => dockActive ? handleFilterClick() : undefined}>
          <PlusIcon />
          <span className="graphFilter-header_text">Add Filter Data</span>
        </div>
        {renderAllFilters()}
      </div>
    </div>
  )
}

GraphFilter.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  dockActive: PropTypes.bool,
  filterPosition: PropTypes.object
};

export default GraphFilter;
