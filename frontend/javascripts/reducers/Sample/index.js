import { handleActions } from 'redux-actions'

export const initialState = {count: 0}

const reducerMap = {
  INCREMENT_COUNTER(state, action) {
    return {...state, count: state.count + 1}
  },
  DECREMENT_COUNTER(state, action) {
    return {...state, count: state.count - 1}
  },
}

export default handleActions(reducerMap, initialState)

/*
// not use redux-actions
export default (state = { count: 0 }, action) => {
  switch(action.type) {
  case 'INCREMENT_COUNTER':
    return { count: state.count + 1 };
  case 'DECREMENT_COUNTER':
    return { count: state.count - 1 };
  default:
    return state;
  }
}
*/
