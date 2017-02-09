import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';

import AuthReducer from './AuthReducer';

export default combineReducers({
  api,
  auth: AuthReducer
});
