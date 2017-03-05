import { Actions } from 'react-native-router-flux';
import { apiRequest } from 'redux-json-api/lib/utils';
import { FETCHED_PEDAGOGICAL_TRAININGS, FETCHED_THEMATICAL_TRAININGS, FETCHED_EXAMINATION_TRAININGS } from './types';

const PEDAGOGICAL_TRAINING = 0;
const THEMATICAL_TRAINING = 1;
const EXAMINATION_TRAINING = 2;

export const fetchTrainingsByType = (serie) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const filters = Object.assign({
        serie_serie_type_eq: serie.type,
        completed_at_not_null: 1
      },
        serie.category && { serie_category_eq: serie.category }
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
        switch (serie.type) {
          case PEDAGOGICAL_TRAINING:
            dispatch({ type: FETCHED_PEDAGOGICAL_TRAININGS, payload: data });
            break;
          case THEMATICAL_TRAINING:
            dispatch({ type: FETCHED_THEMATICAL_TRAININGS, payload: data, category: serie.category });
            break;
          case EXAMINATION_TRAINING:
            dispatch({ type: FETCHED_EXAMINATION_TRAININGS, payload: data });
            break;
        }
        resolve();
      })
      .catch(error => {
        reject(error);
      });
    });
  };
}
