import {renderReactRedux} from 'hypernova-react-redux'

import AppContainer from './containers/Sample'
import configureStore from './store/sample.js'

module.exports = renderReactRedux(
  'sample.js',
  AppContainer,
  configureStore
)