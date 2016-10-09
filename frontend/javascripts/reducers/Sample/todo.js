import { handleActions } from 'redux-actions'
import Todo from '../../models/todo'

export const todoInitialState = new Todo()

export const todoReducerMap = {
  GET_TODO(id, text, completed) {
    return new Todo({id: id, text: text, completed: completed})
  },
  ADD_TODO(state, action) {
    return new Todo({id: action.payload.id, text: action.payload.text, completed: false})
  },
  TOGGLE_TODO(state, action) {
    if (state.id !== action.payload.id) {
      return state
    }
    return state.set('completed', !state.get('completed'))
  },
}

export default handleActions(todoReducerMap, todoInitialState)
