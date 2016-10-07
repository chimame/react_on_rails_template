import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import counterReducer, {initialState} from '../reducers/Sample'

export default (preloadState = {}) => {
  return createStore(counterReducer, initialState, applyMiddleware(promiseMiddleware))
}
