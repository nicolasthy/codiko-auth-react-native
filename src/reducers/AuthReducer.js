import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_RETRY
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  access_token: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.value };
    case SET_PASSWORD:
      return { ...state, password: action.value };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, access_token: action.token };
    case LOGIN_ERROR:
      return { ...state, error: 'Authentification failed', password: '', loading: false };
    case LOGIN_PENDING:
      return { ...state, loading: true, error: '' };
    case LOGIN_RETRY:
      return { ...state, error: '' }
    default:
      return state;
  }
};
