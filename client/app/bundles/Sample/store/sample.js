import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware                from 'redux-promise'
import { routerMiddleware }             from 'react-router-redux'
import { browserHistory }               from 'react-router'

import counterReducer, {initialState} from '../reducers/Sample'

const configureStore = (preloadState = {}) => {
  Object.keys(preloadState).forEach((parentKey) => {
    if (Array.isArray(preloadState[parentKey])) {
      return
    }
    Object.keys(preloadState[parentKey]).forEach((key) => {
      const initialHash =  initialState[parentKey].toObject()
      initialHash[key] = preloadState[parentKey][key]
      initialState[parentKey] = new initialState[parentKey].constructor(initialHash)
    }, preloadState[parentKey])
  }, preloadState)

  return createStore(counterReducer, initialState, applyMiddleware(promiseMiddleware), routerMiddleware(browserHistory))
}

export default configureStore
