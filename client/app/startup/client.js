import React from 'react'
import { Provider } from 'react-redux'
import ReactOnRails from 'react-on-rails'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'

import configureStore from '../bundles/Sample/store/Sample'
import routes from '../bundles/Sample/routes/Sample'


const SampleApp = (_props, _railsContext) => {
  const store = ReactOnRails.getStore("configureStore")

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(
    browserHistory,
    store,
  )

  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
}

export default SampleApp

ReactOnRails.register({
  SampleApp,
})
ReactOnRails.registerStore({
  configureStore
})
