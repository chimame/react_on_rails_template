import { createAction } from 'redux-actions'
export const ADD_TODO          = 'ADD_TODO'
export const TOGGLE_TODO       = 'TOGGLE_TODO'

export const add       = createAction(ADD_TODO)
export const toggle    = createAction(TOGGLE_TODO)

/*
// not use redux-actions
export const increment = {
  type: 'INCREMENT_COUNTER'
}
export const decrement = {
  type: 'DECREMENT_COUNTER'
}
*/