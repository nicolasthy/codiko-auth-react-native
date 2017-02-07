import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api'
import { accessToken } from './config'
import reducer from './reducers'
import {
  CONTENT_TYPE_HEADER,
  ACCEPT_HEADER
} from './config'

// Setup middlewares
const enhancer = compose(
  applyMiddleware(thunk),
  autoRehydrate()
)

// Creates redux store
export const store = createStore(reducer, enhancer)

// Configure and clean up storage
const persistor = persistStore(store, {storage: AsyncStorage})
persistor.purge()

// Configure JSON API
store.dispatch(setEndpointHost('http://localhost:5000'))
store.dispatch(setEndpointPath('/api'))
store.dispatch(setHeaders({
  'Content-Type': CONTENT_TYPE_HEADER,
  'Accept': ACCEPT_HEADER
}))
