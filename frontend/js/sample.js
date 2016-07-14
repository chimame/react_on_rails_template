import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppContainer from './containers/Sample'
import configureStore from './store/sample.js'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('sample-container')
)