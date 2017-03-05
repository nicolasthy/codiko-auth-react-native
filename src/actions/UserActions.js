import { Actions } from 'react-native-router-flux';
import { apiRequest } from 'redux-json-api/lib/utils';
import { FETCHED_USER } from './types';

const fetchedUser = (data) => {
  return {
    type: FETCHED_USER,
    payload: data
  }
}

export const fetchCurrentUser = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const { host: apiHost, path: apiPath, headers } = getState().api.endpoint;
      const endpoint = `${apiHost}${apiPath}/users/me?included=*`;

      apiRequest(endpoint, {
        headers,
        method: 'GET'
      })
      .then(data => {
        dispatch(fetchedUser(data));
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
  };
}
