import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage, Platform } from 'react-native';
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api';
import { Actions, ActionConst } from 'react-native-router-flux';
import reducer from './reducers';

export const CONTENT_TYPE_HEADER = 'application/json';
export const ACCEPT_HEADER = 'application/vnd.codiko.v2';

// Setup middlewares
const enhancer = compose(
  applyMiddleware(thunk),
  autoRehydrate()
);

// Creates redux store
export const store = createStore(reducer, enhancer);

// TODO
// Both conditions run same code !!??
// Configure and clean up storage
export const persistor = persistStore(store, { storage: AsyncStorage }, () => {
  setTimeout(() => {
    if (store.getState().auth.access_token) {
      Actions.main({ type: ActionConst.REPLACE });
    } else {
      Actions.auth({ type: ActionConst.REPLACE });
    }
  }, 2000);
});

// NOTE
// Uncomment this line to purge the store for debugging
// persistor.purge();

// NOTE
// Required on development environment
const HOST = (Platform.OS === 'ios') ? 'http://localhost:3000' : 'http://10.0.3.2:3000';

// Configure JSON API
store.dispatch(setEndpointHost(HOST));
store.dispatch(setEndpointPath('/api'));
store.dispatch(setHeaders({
  'Content-Type': CONTENT_TYPE_HEADER,
  Accept: ACCEPT_HEADER
}));
