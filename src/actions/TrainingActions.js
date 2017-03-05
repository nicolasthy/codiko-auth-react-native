import { Actions } from 'react-native-router-flux';
import { apiRequest } from 'redux-json-api/lib/utils';

import {
  FETCH_EXAMINATION_TRAININGS_SUCCESS,
  FETCH_PEDAGOGICAL_TRAININGS_SUCCESS,
  FETCH_THEMATICAL_TRAININGS_SUCCESS
} from './types';

export const fetchTrainingsByType = (token, serie) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const filters = Object.assign({
        serie_serie_type_eq: serie.type,
        completed_at_not_null: 1
      },
        serie.category.length && { serie_category_eq: serie.category }
      )

      const filterQuery = Object.keys(filters).map(key => {
        return `filter[${key}]=${filters[key]}`
      }).join('&');

      const { host: apiHost, path: apiPath, headers } = getState().api.endpoint;
      const endpoint = `${apiHost}${apiPath}/trainings?${filterQuery}&sort=-completed_at`

      apiRequest(endpoint, {
        headers,
        method: 'GET'
      })
      .then(data => {
        // TODO
        // Do we really need this ? If yes, use const and swicth/case !
        if(serie.type === 0) {
          dispatch({ type: FETCH_PEDAGOGICAL_TRAININGS_SUCCESS, payload: data });
        }
        else if(serie.type === 1) {
          dispatch({ type: FETCH_THEMATICAL_TRAININGS_SUCCESS, payload: data, category: serie.category });
        }
        else {
          dispatch({ type: FETCH_EXAMINATION_TRAININGS_SUCCESS, payload: data });
        }
        resolve()
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };
}
