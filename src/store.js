import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage, Platform } from 'react-native';
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api';
import { Actions, ActionConst } from 'react-native-router-flux';

import reducer from './reducers';
import {
  CONTENT_TYPE_HEADER,
  ACCEPT_HEADER
} from './config';

// Setup middlewares
const enhancer = compose(
  applyMiddleware(thunk),
  autoRehydrate()
);

// Creates redux store
export const store = createStore(reducer, enhancer);

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
persistor.purge();

// AsyncStorage.getItem('reduxPersist:auth')
//   .then((data) => console.log(data))

// Configure JSON API
const HOST = (Platform.OS === 'ios') ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

store.dispatch(setEndpointHost(HOST));
store.dispatch(setEndpointPath('/api'));
store.dispatch(setHeaders({
  'Content-Type': CONTENT_TYPE_HEADER,
  Accept: ACCEPT_HEADER
}));
