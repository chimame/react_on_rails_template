import { combineReducers } from 'redux'
import todos, {todosInitialState} from './todos'
import counter, {counterInitialState} from './counter'

export const initialState = {
  counter: counterInitialState,
  todos: todosInitialState
}

export default combineReducers({
  todos,
  counter
})
