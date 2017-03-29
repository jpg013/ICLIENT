import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CheckmarkIcon from '../../icons/checkmark.icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './loading-spinner.css';

const loadingSpinner = ({success}) => {
  const getSpinClassNames = () => {
    return classNames(
      'loadingSpinner',
      {'loadingSpinner_success': success}
    )
  }

  const renderSpinner = () => {
    return success ?
      (<circle className="loadingSpinner-complete" cx="50" cy="50" r="44"/>) :
      (<circle className="loadingSpinner-inProgress" cx="50" cy="50" r="44"/>);
  }

  const renderCheckmark = () => {
    return (
      <ReactCSSTransitionGroup key='loadingSpinner-checkmarkTransitionKey' transitionName="loadingSpinner-checkmarkTransition" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <div className="loadingSpinner-checkmark"><CheckmarkIcon /></div>
      </ReactCSSTransitionGroup>
      );
  }

  return (
    <div className={getSpinClassNames()}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0, 0, 100, 100">
        <g>
          {renderSpinner()}
        </g>
      </svg>
      {success && renderCheckmark()}
    </div>
  )
}

loadingSpinner.propTypes = {
  success: PropTypes.bool
};

export default loadingSpinner;
