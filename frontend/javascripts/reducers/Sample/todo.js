import { handleActions } from 'redux-actions'
import Todo from '../../models/todo'

export const todoInitialState = new Todo()

export const todoReducerMap = {
  ADD_TODO(state, action) {
    return new Todo({id: action.payload.id, text: action.payload.text, completed: false})
  },
  TOGGLE_TODO(state, action) {
    if (state.id !== action.payload) {
      return state
    }
    return state.set('completed', !state.get('completed'))
  },
}

export default handleActions(todoReducerMap, todoInitialState)
