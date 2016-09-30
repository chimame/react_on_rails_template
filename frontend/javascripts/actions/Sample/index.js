import { createAction } from 'redux-actions'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const ADD_TODO          = 'ADD_TODO'
export const TOGGLE_TODO       = 'TOGGLE_TODO'

export const increment = createAction(INCREMENT_COUNTER)
export const decrement = createAction(DECREMENT_COUNTER)
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