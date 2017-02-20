import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './login-control.css';

const LoginControl = (props) => {
  const getControlClassNames = () => classNames('login-formControl', {'login-formControl_focused': (props.focused === true)});
  const getControlName = () => `login-${props.inputType}-control`;

  return (
    <div className={getControlClassNames()}>
      <div className="login-formControlLabel">
        <label htmlFor={getControlName()}>
          {props.children}
        </label>
      </div>
      <div className="login-formControlInput">
        <input
          id={getControlName()}
          className="login-formControlInput_text"
          type={props.inputType}
          onFocus={() => props.onInputFocus(props.inputType)}
          onBlur={() => props.onInputFocus(props.inputType)}
        />
        <div className="login-formControl_indicator"></div>
      </div>
    </div>
  )
}

LoginControl.propTypes = {
  focused: PropTypes.bool.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired
}

export default LoginControl;
