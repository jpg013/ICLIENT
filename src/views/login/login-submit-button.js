import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './login-submit-button.css';

const LoginSubmitButton = ({onButtonClick, status}) => {
  const getBtnClassName = () => classNames('login-submitBtn', {'login-submitBtn_submitting': status === 'submitting'});

  return (
    <div className="login-submit">
      <button className={getBtnClassName()} onClick={onButtonClick}>
        <span className="login-submitBtn_text">Log In</span>
      </button>
    </div>
  );
};

LoginSubmitButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
}

export default LoginSubmitButton;
