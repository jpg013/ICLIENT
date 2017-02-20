import React, { PropTypes, Component } from 'react';
import LoginUsernameIcon from '../../icons/login-username.icon';
import LoginPasswordIcon from '../../icons/login-password.icon';
import LoginLogo from './login-logo';
import LoginControl from './login-control';
import LoginRememberMe from './login-rememberme';
import LoginSubmit from './login-submit';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: undefined,
      rippleElement: undefined,
      processing: false,
      mounted: false,
      rememberMe: false
    }
  }

  onInputFocus(controlName) {
    this.setState({ focusedInput: controlName});
  }

  onInputBlur(controlName) {
    if (this.state.focusedInput === controlName) {
      this.setState({ focusedInput: undefined});
    }
  }

  submitLogin(e) {
    this.setState({processing: true});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({mounted: true});
    })
  }

  getLoginFormClassNames() {
    return classNames('login-form', {'login-form_mounted': this.state.mounted});
  }

  setupRippleElement(el) {
    if (!el || this.state.rippleElement) { return; }
    this.setState({ rippleElement: el });
  }

  toggleRememberMeHandler() {
    this.setState({rememberMe: !this.state.rememberMe});
  }

  render() {
    return (
      <div className="login">
        <LoginLogo />

        <div className={this.getLoginFormClassNames()}>
          <div className="login-formControlsContainer">
            <LoginControl
              inputType="username"
              focused={this.state.focusedInput === 'username'}
              onInputFocus={val => this.onInputFocus(val)}
              onInputBlur={val => this.onInputBlur(val)}
              >
              <LoginUsernameIcon />
            </LoginControl>
            <LoginControl
              inputType="password"
              focused={this.state.focusedInput === 'password'}
              onInputFocus={val => this.onInputFocus(val)}
              onInputBlur={val => this.onInputBlur(val)}
              >
              <LoginPasswordIcon />
            </LoginControl>
          </div>

          <LoginRememberMe onToggleRememberMe={() => {this.toggleRememberMeHandler()}}/>

          <LoginSubmit
            processing={this.state.processing}
            onSubmit={e => {this.submitLogin(e)}}
            setupRippleElement={el => this.setupRippleElement(el)}
            rippleElement={this.state.rippleElement}
          >
          </LoginSubmit>

          <div className="login-forgotPassword">
            <span className="login-forgotPassword_link">Lost your password?</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
