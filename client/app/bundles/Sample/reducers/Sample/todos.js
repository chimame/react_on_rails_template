import { handleActions } from 'redux-actions'
import { todoReducerMap } from './todo'

export const todosInitialState = []

const reducerMap = {
  GET_TODOS(state, action) {
    return action.payload.map((todo) => {return todoReducerMap.GET_TODO(todo.id, todo.text, todo.completed)})
  },
  ADD_TODO(state, action) {
    return [...state, todoReducerMap.ADD_TODO(undefined, action)]
  },
  TOGGLE_TODO(state, action) {
    return state.map(t => todoReducerMap.TOGGLE_TODO(t, action))
  },
}

export default handleActions(reducerMap, todosInitialState)
