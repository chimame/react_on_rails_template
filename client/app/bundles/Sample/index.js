import React from 'react'
import { Provider } from 'react-redux'

import AppContainer from './containers/Sample'
import configureStore from './store/sample.js'

const SampleApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <AppContainer />
  </Provider>
)

export default SampleApp
