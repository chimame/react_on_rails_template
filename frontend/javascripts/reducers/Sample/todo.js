import { handleActions } from 'redux-actions'
//import todo from '.todo'

export const todoInitialState = {}

export const todoReducerMap = {
  ADD_TODO(state, action) {
    return {id: action.payload.id, text: action.payload.text, completed: false}
  },
  TOGGLE_TODO(state, action) {
    if (state.id !== action.payload.id) {
      return state
    }
    return {...state, completed: !state.completed}
  },
}

export default handleActions(reducerMap, todoInitialState)
