import React, { PropTypes } from 'react';
import './login-form-control.component.css';

const LoginFormControl = (props) => {
  let controlEl;

  const {inputType, controlName, onChange} = props;
  const inputFocusHandler = () => controlEl ? controlEl.classList.add('login-formControl_focused') : undefined;
  const inputBlurHandler = () => controlEl ? controlEl.classList.remove('login-formControl_focused') : undefined;

  return (
    <div className='login-formControl' ref={el => el ? controlEl = el : undefined}>
      <div className="login-formControlLabel">
        <label htmlFor={controlName}>
          {props.children}
        </label>
      </div>
      <div className="login-formControlInput">
        <input
          id={controlName}
          className="login-formControlInput_text"
          type={inputType}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          onChange={onChange}
        />
        <div className="login-formControl_indicator"></div>
      </div>
    </div>
  )
}

LoginFormControl.propTypes = {
  inputType: PropTypes.string.isRequired,
  controlName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LoginFormControl;
