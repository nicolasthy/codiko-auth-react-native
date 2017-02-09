import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <Provider store={store} persistor={persistor}>
        <Router />
      </Provider>
    );
  }
}

export default App;
