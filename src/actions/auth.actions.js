import 'whatwg-fetch';
import { REQUEST_LOGIN, REQUEST_LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import { setAuthToken, removeAuthToken, removeUser, setUser } from '../services/storage.service';

const requestLogin = creds => ({ type: REQUEST_LOGIN });
const loginSuccess = user => ({type: LOGIN_SUCCESS, user});
const loginError = () => ({type: LOGIN_FAILURE});
const requestLogout = () => ({ type: REQUEST_LOGOUT});

const loginUser = creds => {
  return dispatch => {
    dispatch(requestLogin());
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(function(resp) {
      if (resp.status !== 200) {
        throw new Error('There was an error logging in.');
      }
      return resp.json();
    })
    .then(function(resp) {
      if (resp.success) {
        setAuthToken(resp.token);
        setUser(resp.user);
        dispatch(loginSuccess(resp.user));
      } else {
        dispatch(loginError());
      }
    })
    .catch(function(err) {
      dispatch(loginError());
    })
  }
}

const logoutUser = () => {
  // Logs the user out
  return dispatch => {
    dispatch(requestLogout());
    removeAuthToken();
    removeUser();
  }
}

export {loginUser, logoutUser};
