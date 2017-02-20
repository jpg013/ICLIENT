import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingSpinner from '../loadingSpinner/loading-spinner';
import classNames from 'classnames';
import './login-submit.css';

const LoginSubmit = ({onSubmit, processing, setupRippleElement, rippleElement}) => {
  const getSubmitBtnClassNames = () => classNames('login-submitBtn', {'login-submitBtn_processing': processing});
  const onRippleRef = (el) => el ? setupRippleElement(el) : undefined;
  const loadingSpinnerEl = processing ? <LoadingSpinner key="loading-spinner-transition-key"/> : undefined;

  const submitClickHandler = e => {
    if (processing) { return; }
    onSubmit(e);
    animateRipple(e);
  }

  const animateRipple = e => {
    if (!rippleElement) { return; }
    rippleElement.classList.remove('ripple_animate');
    setTimeout(() => { rippleElement.classList.add('ripple_animate')}, 1);
  }

  return (
    <div className="login-submit">
      <button className={getSubmitBtnClassNames()} onClick={submitClickHandler}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {loadingSpinnerEl}
        </ReactCSSTransitionGroup>
        <div className="ripple" ref={onRippleRef}></div>
        <span className="login-submitBtn_text">Log In</span>
      </button>
    </div>
  );
};

LoginSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  processing: PropTypes.bool.isRequired,
  setupRippleElement: PropTypes.func.isRequired,
  rippleElement: PropTypes.object
}

export default LoginSubmit;
