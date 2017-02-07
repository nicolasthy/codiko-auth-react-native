import { api } from '../config'

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_PENDING
} from './types'

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

const apiRequest = (url, options = {}) => {
  return fetch(url, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        if (res.status === 204) {
          return res;
        } else if (jsonContentTypes.some(contentType => res.headers.get('Content-Type').indexOf(contentType) > -1)) {
          return res.json();
        }
      }

      const e = new Error(res.statusText);
      e.response = res;
      throw e;
    });
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const signInWithEmailAndPassword = (getState, resource, user) => {
  const { host: apiHost, path: apiPath, headers } = getState().api.endpoint;
  const endpoint = `${apiHost}/${resource}`;
  user.grant_type = 'password'

  return fetch(endpoint, {
    headers,
    "method": 'POST',
    body: JSON.stringify(user)
  })
}


export const loginUser = (user) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: LOGIN_USER_PENDING })
      signInWithEmailAndPassword(getState, '/oauth/token', user)
        .then(checkStatus)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: LOGIN_USER_SUCCESS, payload: data.access_token })
        })
        .catch(error => {
          dispatch({ type: LOGIN_USER_ERROR, payload: error})
        })
    })
  }
}
