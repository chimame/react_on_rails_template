import { handleActions } from 'redux-actions'
import { todoReducerMap } from './todo'

export const todosInitialState = []

const reducerMap = {
  ADD_TODO(state, action) {
    return [...state, todoReducerMap.ADD_TODO(undefined, action)]
  },
  TOGGLE_TODO(state, action) {
    return state.map(t => todoReducerMap.TOGGLE_TODO(t, action))
  },
}

export default handleActions(reducerMap, todosInitialState)
