import 'whatwg-fetch';
import { browserHistory } from 'react-router';
import { getAuthToken } from '../services/storage.service';

const BASE_URL = "/api/";

const buildQueryParams = params => {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

const buildApiUrl = (endpoint, method, opts) => {
  let url = BASE_URL + endpoint;
  if (method === 'get' && opts.params) {
    url = `${url}?${buildQueryParams(opts.params)}`;
  }
  return url;
}

const buildApiConfig = (url, method, opts) => {
  let config = {};
  if (method === 'get') {
    // Do nothing
  } else if (method === 'post') {
    config.body = JSON.stringify(opts.body)
  }
  return config;
}

const callApi = (endpoint, method, opts = {}) => {
  const headers = {
    'Authorization' : `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json'
  };
  const url = buildApiUrl(endpoint, method, opts);
  const config = Object.assign({}, buildApiConfig(url, method, opts), { headers, method})

  return fetch(url, config)
    .then(function(resp) {
      if (resp.status === 401) {
        browserHistory.push('/logout');
      }
      return resp.json();
    })
}

export { callApi }
