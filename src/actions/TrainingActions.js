import { Actions } from 'react-native-router-flux';
import { apiRequest } from 'redux-json-api/lib/utils';

import {
  FETCH_EXAMINATION_TRAININGS_SUCCESS,
  FETCH_PEDAGOGICAL_TRAININGS_SUCCESS,
  FETCH_THEMATICAL_TRAININGS_SUCCESS
} from './types';

const getTrainingsByType = (token, serie, getState) => {
  const { host: apiHost, path: apiPath, headers } = getState().api.endpoint;
  let endpoint = `${apiHost}/api/trainings?filter[serie_serie_type_eq]=${serie.type}&filter[completed_at_not_null]=1&sort=-completed_at&access_token=${token}`;

  if(serie.category) {
    endpoint += `&filter[serie_category_eq]=${serie.category}`;
  }

  return apiRequest(endpoint, {
    headers,
    method: 'GET',
  });
}

export const fetchTrainingsByType = (token, serie) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      getTrainingsByType(token, serie, getState)
        .then(({ data }) => {
          if(serie.type === 0) {
            dispatch({ type: FETCH_PEDAGOGICAL_TRAININGS_SUCCESS, payload: data });
          }
          else if(serie.type === 1) {
            dispatch({ type: FETCH_THEMATICAL_TRAININGS_SUCCESS, payload: data, category: serie.category });
          }
          else {
            dispatch({ type: FETCH_EXAMINATION_TRAININGS_SUCCESS, payload: data });
          }
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
}
