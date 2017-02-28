import React, { PropTypes } from 'react';
import './loading-spinner.css';

const LoadingSpinner = () => {
  return (
    <div className="checkmark">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0, 0, 100, 100">
        <g>
          <circle className="path" cx="50" cy="50" r="44"/>
        </g>
      </svg>
    </div>
  )
}

LoadingSpinner.propTypes = {
  success: PropTypes.bool
};

export default LoadingSpinner;
