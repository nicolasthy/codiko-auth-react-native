import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';

import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import TrainingReducer from './TrainingReducer';

export default combineReducers({
  api,
  auth: AuthReducer,
  currentUser: UserReducer,
  trainings: TrainingReducer
});
