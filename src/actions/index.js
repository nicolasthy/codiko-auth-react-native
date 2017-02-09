import { Actions } from 'react-native-router-flux';
import { apiRequest, checkStatus } from './api'

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_PENDING,
  LOGIN_USER_RETRY
} from './types';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUserRetry = () => {
  return {
    type: LOGIN_USER_RETRY
  };
};

const signInWithEmailAndPassword = (getState, resource, user) => {
  const { host: apiHost, path: apiPath, headers } = getState().api.endpoint;
  const endpoint = `${apiHost}/${resource}`;
  user.grant_type = 'password';

  return apiRequest(endpoint, {
    headers,
    method: 'POST',
    body: JSON.stringify(user)
  });
};


export const loginUser = (user) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: LOGIN_USER_PENDING });
      signInWithEmailAndPassword(getState, '/oauth/token', user)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: LOGIN_USER_SUCCESS, payload: data.access_token });
          Actions.main();
        })
        .catch(error => {
          dispatch({ type: LOGIN_USER_ERROR, payload: error });
        });
    });
  };
};
