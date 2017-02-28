import { REQUEST_LOGIN, REQUEST_LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import { Observable } from 'rxjs/Observable';

const requestLogin = () => ({ type: REQUEST_LOGIN });
const loginSuccess = user => ({type: LOGIN_SUCCESS, user});
const loginError = message => ({type: LOGIN_FAILURE, message});
const requestLogout = () => ({ type: REQUEST_LOGOUT});

const loginUser = creds => {
  const config = Object.assign({}, { body: creds }, {
    method: "POST",
    url: "/login"
  });

  return dispatch => {
    dispatch(requestLogin())
    const subscribe = Observable
      .ajax(config)
      .map(resp => resp.response)
      .subscribe(resp => {
        subscribe.unsubscribe();
        if (resp.success) {
          localStorage.setItem('auth_token', resp.token);
          localStorage.setItem('auth_user', JSON.stringify(resp.user));
          dispatch(loginSuccess(resp.user));
        } else {
          dispatch(loginError(resp.message));
        }
      })
  }
}

const logoutUser = () => {
  // Logs the user out
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }
}

export {loginUser, logoutUser};
