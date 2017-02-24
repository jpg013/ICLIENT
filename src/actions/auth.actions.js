import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';

const requestLogin = () => ({ type: REQUEST_LOGIN });
const loginSuccess = user => ({type: LOGIN_SUCCESS, user});
const loginError = message => ({type: LOGIN_FAILURE, message})

const loginUser = creds => {
  const config = Object.assign({}, { creds }, {
    method: "POST",
    url: "/login"
  });

  return dispatch => {
    dispatch(requestLogin())
    const subscribe = Observable
      .ajax(config)
      .map(resp => resp.response)
      .subscribe(resp => resp.success ? console.log('succes') : dispatch(loginError(resp.message)));
  }
}

export {loginUser};
