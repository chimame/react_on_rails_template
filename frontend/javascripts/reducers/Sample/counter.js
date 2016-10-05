import { handleActions } from 'redux-actions'
import Counter from '../../models/couter'

export const counterInitialState = new Counter()

const reducerMap = {
  INCREMENT_COUNTER(state, action) {
    return state.set('count', state.get('count') + 1)
  },
  DECREMENT_COUNTER(state, action) {
    return state.set('count', state.get('count') - 1)
  },
}

export default handleActions(reducerMap, counterInitialState)

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
