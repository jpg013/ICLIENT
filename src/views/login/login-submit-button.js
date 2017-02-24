import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingSpinner from '../loadingSpinner/loading-spinner';
import classNames from 'classnames';
import './login-submit-button.css';

const LoginSubmitButton = ({onButtonClick, status}) => {
  let rippleEl;
  const getBtnClassName = () => classNames('login-submitBtn', {'login-submitBtn_submitting': status === 'submitting'});
  const getRippleClassName = () => classNames('ripple', {'ripple_animate':  status === 'submitting'})
  const onRippleRef = (el) => el ? rippleEl = el : undefined;

  return (
    <div className="login-submit">
      <button className={getBtnClassName()} onClick={onButtonClick}>

        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {(status === 'submitting') && <LoadingSpinner key="loading-spinner-transition-key" />}
        </ReactCSSTransitionGroup>

        <div className={getRippleClassName()}></div>
        <span className="login-submitBtn_text">Log In</span>

      </button>
    </div>
  );
};

LoginSubmitButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  status: PropTypes.func.isRequired
}

export default LoginSubmitButton;
