import { REQUEST_LOGIN, REQUEST_LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import { Observable } from 'rxjs/Observable';
import { setAuthToken, removeAuthToken } from '../services/storage.service';

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
          setAuthToken(resp.token);
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
    removeAuthToken();
  }
}

export {loginUser, logoutUser};
