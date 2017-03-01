import {
  FETCH_PEDAGOGICAL_TRAININGS_SUCCESS,
  FETCH_EXAMINATION_TRAININGS_SUCCESS,
  FETCH_THEMATICAL_TRAININGS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  examination: [],
  pedagogical: [],
  thematical: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PEDAGOGICAL_TRAININGS_SUCCESS:
      return { ...state, pedagogical: action.payload };
    case FETCH_EXAMINATION_TRAININGS_SUCCESS:
      return { ...state, examination: action.payload };
    case FETCH_THEMATICAL_TRAININGS_SUCCESS:
      let thematical = { ...state.thematical };
      thematical[action.category] = action.payload;
      return { ...state, thematical };
    default:
      return state;
  }
};
