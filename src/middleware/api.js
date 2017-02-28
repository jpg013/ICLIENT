import { Observable } from 'rxjs/Observable';
import { browserHistory } from 'react-router';

const BASE_URL = "/api/";

const callApi = config => {
  if (!config) { return; }
  let token = localStorage.getItem('auth_token') || undefined;
  const headers = { headers: { 'Authorization' : `Bearer ${token}` }};
  const callOptions = Object.assign({}, config, headers, {url: BASE_URL + config.url})

  const ajax$ = Observable
    .ajax(callOptions)
    .map(resp => resp.response)
    .publishReplay()
    .refCount();

  const ajaxSubscribe = ajax$.subscribe(successHandler, errorHandler);
  return ajax$;

  function successHandler() {
    ajaxSubscribe.unsubscribe();
  }

  function errorHandler(err) {
    ajaxSubscribe.unsubscribe();
    if (err.status === 401) {
      browserHistory.push('/logout');
    }
  }
}

export { callApi }
