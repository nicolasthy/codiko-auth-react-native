import {
  FETCHED_PEDAGOGICAL_TRAININGS,
  FETCHED_EXAMINATION_TRAININGS,
  FETCHED_THEMATICAL_TRAININGS
} from '../actions/types';

const INITIAL_STATE = {
  examination: [],
  pedagogical: [],
  thematical: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHED_PEDAGOGICAL_TRAININGS:
      return { ...state, pedagogical: action.payload };
    case FETCHED_EXAMINATION_TRAININGS:
      return { ...state, examination: action.payload };
    case FETCHED_THEMATICAL_TRAININGS:
      let thematical = { ...state.thematical };
      thematical[action.category] = action.payload;
      return { ...state, thematical };
    default:
      return state;
  }
};
