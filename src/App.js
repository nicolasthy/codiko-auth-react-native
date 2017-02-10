import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation';

import { store, persistor } from './store';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    Orientation.lockToPortrait();
    Orientation.unlockAllOrientations();
  }

  render() {
    return (
      <Provider store={store} persistor={persistor}>
        <Router />
      </Provider>
    );
  }
}

export default App;
