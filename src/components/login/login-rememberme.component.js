import React, {PropTypes} from 'react';
import './login-rememberme.component.css';

const LoginRememberMe = ({onChange}) => (
  <div className="login-rememberMe">
    <div className="regularCheckbox login-rememberMeCheckbox">
      <input
        type="checkbox"
        id="remember-me-checkbox"
        name="remember-me-checkbox"
        onChange={onChange}
      />
      <label htmlFor="remember-me-checkbox"></label>
      <span className="login-rememberMeCheckbox_label">Remember me</span>
    </div>
  </div>
);

LoginRememberMe.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default LoginRememberMe;
