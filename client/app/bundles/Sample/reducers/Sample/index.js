import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import todos, {todosInitialState} from './todos'
import counter, {counterInitialState} from './counter'

export const initialState = {
  counter: counterInitialState,
  todos: todosInitialState
}

export default combineReducers({
  todos,
  counter,
  routing
})
