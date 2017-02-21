import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_PENDING,
  LOGIN_USER_RETRY
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
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, access_token: action.payload };
    case LOGIN_USER_ERROR:
      return { ...state, error: 'Authentification failed', password: '', loading: false };
    case LOGIN_USER_PENDING:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_RETRY:
      return { ...state, error: '' }
    default:
      return state;
  }
};
