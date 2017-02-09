import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
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
// persistor.purge();

// AsyncStorage.getItem('reduxPersist:auth')
//   .then((data) => console.log(data))

// Configure JSON API
store.dispatch(setEndpointHost('http://localhost:5000'));
store.dispatch(setEndpointPath('/api'));
store.dispatch(setHeaders({
  'Content-Type': CONTENT_TYPE_HEADER,
  Accept: ACCEPT_HEADER
}));