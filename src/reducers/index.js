import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import { reducer as api } from 'redux-json-api'

export default combineReducers({
  api,
  auth: AuthReducer
})
