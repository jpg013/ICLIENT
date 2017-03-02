const AUTH_TOKEN_KEY = 'AUTH_TOKEN';

const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);
const setAuthToken = token => localStorage.setItem(AUTH_TOKEN_KEY, token);
const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);

export {
  getAuthToken,
  setAuthToken,
  removeAuthToken
}
