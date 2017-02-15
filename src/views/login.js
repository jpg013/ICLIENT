import React, { PropTypes, Component } from 'react';
import InnosolLogoIcon from '../icons/innosol-logo.icon';
import LoginUsernameIcon from '../icons/login-username.icon';
import LoginPasswordIcon from '../icons/login-password.icon';
import classNames from 'classnames';
import './login.css';

const FOCUS_CSS_CLASS = 'login-formControl_focused';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: undefined
    }
  }

  getFormControlClass(controlName) {
    return classNames(
      'login-formControl',
      {'login-formControl_focused': this.state.focusedInput === controlName}
    );
  }

  onInputFocus(controlName) {
    this.setState({ focusedInput: controlName});
  }

  onInputBlur(controlName) {
    if (this.state.focusedInput === controlName) {
      this.setState({ focusedInput: undefined});
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login-logo">
          <div className="login-logoTop">
            <InnosolLogoIcon cssClass='login-logo_icon' cssDecorationClass='login-logo_decoration' />
          </div>
          <div className="login-logoBottom">
            <span className="login-logoLabel">Professionals</span>
          </div>
        </div>
        <div className="login-form">
          <div className="login-formControlsContainer">
            <div className={this.getFormControlClass('username')}>
              <div className="login-formControlLabel">
                <label htmlFor="login-username-input">
                  <LoginUsernameIcon />
                </label>
              </div>
              <div className="login-formControlInput">
                <input
                  id="login-username-input"
                  className="login-formControlInput_text"
                  type="text"
                  onFocus={() => this.onInputFocus('username')}
                  onBlur={() => this.onInputBlur('username')}
                />
                <div className="login-formControl_indicator"></div>
              </div>
            </div>
            <div className={this.getFormControlClass('password')}>
              <div className="login-formControlLabel">
                <label htmlFor="login-password-input">
                  <LoginPasswordIcon className="login-formControlLabel_icon"/>
                </label>
              </div>
              <div className="login-formControlInput">
                <input
                  id="login-password-input"
                  className="login-formControlInput_text"
                  type="password"
                  onFocus={() => this.onInputFocus('password')}
                  onBlur={() => this.onInputBlur('password')}
                />
                <div className="login-formControl_indicator"></div>
              </div>
            </div>
          </div>
          <div className="login-rememberMe">
            <div className="regularCheckbox login-rememberMeCheckbox">
              <input type="checkbox" value="1" id="giving-filter-checkbox" name="geography-filter-checkbox" />
              <label htmlFor="giving-filter-checkbox"></label>
              <span className="login-rememberMeCheckbox_label">Remember me</span>
            </div>
          </div>
          <div className="login-submit">
            <button className="login-submitBtn">
              <span className="login-submitBtn_text">Log In</span>
            </button>
          </div>
          <div className="login-forgotPassword">
            <span className="login-forgotPassword_link">Lost you password?</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
