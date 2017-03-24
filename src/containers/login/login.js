import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginLogo from '../../components/login/login-logo.component';
import LoginFormControl from '../../components/login/login-form-control.component';
import LoginUsernameIcon from '../../icons/login-username.icon';
import LoginPasswordIcon from '../../icons/login-password.icon';
import LoginRememberMe from '../../components/login/login-rememberme.component';
import LoginSubmitButton from '../../components/login/login-submit-button.component';
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

    const onKeydown = e => {
      if (e.keyCode !== 13) return;
      this.handleLogin();
    }
    this.keyPressEventHandler = onKeydown.bind(this);
  }

  handleLogin() {
    if (this.props.status === 'submitting') { return; }
    const {email, password, rememberMe} = this.state;
    this.props.onSubmitClick({email, password, rememberMe})
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressEventHandler);
  }

  componentDidUpdate() {
    if (this.props.status === 'authenticated') {
      setTimeout(function() {
        browserHistory.push('/');
      }, 250)
    }
  }

  render() {
    const getLoginFormClassName = () => {
      return classNames(
        'login-formControlsContainer',
        {'login-form_error': this.props.status === 'error'}
      );
    }

    return (
      <div className="login">
        <LoginLogo />
        <ReactCSSTransitionGroup key='loginformenter' transitionName="loginFormEnter" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div className="login-form">
            <div className={getLoginFormClassName()}>
              <LoginFormControl inputType="text" controlName="login-email-control" onChange={e => this.setState({email: e.target.value})}>
                <LoginUsernameIcon />
              </LoginFormControl>
              <LoginFormControl inputType="password" controlName="login-password-control" onChange={e => this.setState({password: e.target.value})}>
                <LoginPasswordIcon />
              </LoginFormControl>
            </div>

            <LoginRememberMe onChange={e => this.setState({rememberMe: e.target.checked})}/>

            <LoginSubmitButton status={this.props.status} onButtonClick={() => this.handleLogin()} />

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
  const status = state.getIn(['auth', 'status']) || 'not-submitted';
  return { status };
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: creds => dispatch(loginUser(creds))
  }
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default ConnectedLogin;
