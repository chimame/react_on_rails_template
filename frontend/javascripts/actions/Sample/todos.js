import { createAction } from 'redux-actions'
export const ADD_TODO          = 'ADD_TODO'
export const TOGGLE_TODO       = 'TOGGLE_TODO'

export const add       = createAction(ADD_TODO)
export const toggle    = createAction(TOGGLE_TODO)

/*
// not use redux-actions
export const add = {
  type: 'ADD_TODO'
}
export const toggle = {
  type: 'TOGGLE_TODO'
}
*/