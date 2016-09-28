import { createStore } from 'redux'
import counterReducer, {initialState} from '../reducers/Sample'

export default (preloadState = {}) => {
  return createStore(counterReducer, {...initialState, ...preloadState})
}