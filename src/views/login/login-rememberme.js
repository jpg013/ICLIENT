import React, {PropTypes} from 'react';
import './login-rememberme.css';

const LoginRememberMe = ({onToggleRememberMe}) => (
  <div className="login-rememberMe">
    <div className="regularCheckbox login-rememberMeCheckbox">
      <input
        type="checkbox"
        id="remember-me-checkbox"
        name="remember-me-checkbox"
        onClick={onToggleRememberMe}
      />
      <label htmlFor="remember-me-checkbox"></label>
      <span className="login-rememberMeCheckbox_label">Remember me</span>
    </div>
  </div>
);

LoginRememberMe.propTypes = {
  onToggleRememberMe: PropTypes.func.isRequired
};

export default LoginRememberMe;
