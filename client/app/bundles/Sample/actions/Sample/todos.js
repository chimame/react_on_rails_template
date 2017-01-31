import { createAction } from 'redux-actions'
import { getTodos }     from '../../utils/WebApi'

export const GET_TODOS         = 'GET_TODOS'
export const ADD_TODO          = 'ADD_TODO'
export const TOGGLE_TODO       = 'TOGGLE_TODO'

export const get       = createAction(GET_TODOS, getTodos)
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