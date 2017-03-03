const AUTH_TOKEN_KEY = 'INNOSOL_AUTH_TOKEN';
const USER_KEY = 'INNOSOL_USER'

const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);
const setAuthToken = token => localStorage.setItem(AUTH_TOKEN_KEY, token);
const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);
const getUser = () => JSON.parse(localStorage.getItem(USER_KEY));
const setUser = user => localStorage.setItem(USER_KEY, JSON.stringify(user));
const removeUser = () => localStorage.removeItem(USER_KEY);

const getBootData = () => {
  return {
    authToken: getAuthToken(),
    user: getUser()
  }
}

export {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  getUser,
  setUser,
  removeUser,
  getBootData
}
