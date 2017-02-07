import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { setEndpointHost, setEndpointPath, setHeaders } from 'redux-json-api'

import { store } from './store'
import reducers from './reducers'

import {
  CONTENT_TYPE_HEADER,
  ACCEPT_HEADER,
  AUTHORIZATION_HEADER
} from './config'

import Router from './Router'

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
