import {
  FETCH_CURRENT_USER
} from '../actions/types';

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
