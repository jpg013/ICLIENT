import { Observable } from 'rxjs/Observable';

const BASE_URL = "/api/";

const callApi = config => {
  if (!config) { return; }
  let token = localStorage.getItem('auth_token') || undefined;
  const headers = { headers: { 'Authorization' : `Bearer ${token}` }};
  const callOptions = Object.assign({}, config, headers, {url: BASE_URL + config.url})

  return Observable.ajax(callOptions)
    .map(resp => {
      console.log(resp);
      return resp;
    })
    .catch(function(resp) {
      debugger
      console.log(resp);
    });
}

export { callApi }
