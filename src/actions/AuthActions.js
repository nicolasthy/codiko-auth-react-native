import { Actions } from 'react-native-router-flux';
import { apiRequest } from 'redux-json-api/lib/utils';
import { SET_USERNAME, SET_PASSWORD, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_PENDING, LOGIN_RETRY } from './types';

export const setUsername = (value) => {
  return {
    type: SET_USERNAME,
    value: value
  };
};

export const setPassword = (value) => {
  return {
    type: SET_PASSWORD,
    value: value
  };
};

export const loginPending = () => {
  return { type: LOGIN_PENDING };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    token: token
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error: error
  };
};

export const loginRetry = () => {
  return { type: LOGIN_RETRY };
};

export const login = (user) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(loginPending());

      const { host: apiHost, headers: headers } = getState().api.endpoint;
      const endpoint = `${apiHost}/oauth/token`;
      const resource = Object.assign(user, {grant_type: 'password'})

      apiRequest(endpoint, {
        headers,
        method: 'POST',
        body: JSON.stringify(resource)
      })
      .then(data => {
        dispatch(loginSuccess(data.access_token));
        Actions.main();
        resolve();
      })
      .catch(error => {
        dispatch(loginError(error));
        reject(error);
      });
    });
  };
};
