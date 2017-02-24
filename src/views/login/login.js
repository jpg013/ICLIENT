import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import LoginLogo from './login-logo';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginFormControl from './login-form-control';
import LoginUsernameIcon from '../../icons/login-username.icon';
import LoginPasswordIcon from '../../icons/login-password.icon';
import LoginRememberMe from './login-rememberme';
import LoginSubmitButton from './login-submit-button';
import { loginUser } from '../../actions/auth.actions';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false
    };
  }

  getLoginFormClassName() {
    const x = classNames('login-form', {'login-form_error': this.props.status==='error'});
    console.log(x);
    return classNames('login-form', {'login-form_error': this.props.status==='error'});
  }

  render() {
    return (
      <div className="login">
        <LoginLogo />
        <ReactCSSTransitionGroup transitionName="loginForm" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
          <div className={this.getLoginFormClassName()}>
            <div className="login-formControlsContainer">
              <LoginFormControl inputType="text" controlName="login-email-control" onChange={e => this.setState({email: e.target.value})}>
                <LoginUsernameIcon />
              </LoginFormControl>
              <LoginFormControl inputType="password" controlName="login-password-control" onChange={e => this.setState({password: e.target.value})}>
                <LoginPasswordIcon />
              </LoginFormControl>
            </div>

            <LoginRememberMe onChange={e => this.setState({rememberMe: e.target.checked})}/>

            <LoginSubmitButton status={this.props.status} onButtonClick={() => this.props.onSubmitClick()} />

            <div className="login-forgotPassword">
              <span className="login-forgotPassword_link">Lost your password?</span>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Login.propTypes = {
  status: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const isFetching = state.getIn(['auth', 'isFetching']);
  const error = state.getIn(['auth', 'error']);
  const user = state.getIn(['auth', 'user']);
  const status = isFetching ? 'submitting' : error ? 'error' : user ? 'success' : 'not-submitted';
  return { status };
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: creds => dispatch(loginUser(creds))
  }
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default ConnectedLogin;
