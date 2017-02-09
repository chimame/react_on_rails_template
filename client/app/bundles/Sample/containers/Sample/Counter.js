import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Sample/counter'
import { Link } from 'react-router'
// not use redux-actions
//import {increment, decrement} from '../../actions/Sample/counter'

import Counter from '../../components/Counter'

class CounterContainer extends Component {
  constructor(props) {
    super(props)
//    this.state = {data: {}}
  }

  render() {
    const { data, actions } = this.props
    return (
      <div>
        <Counter count={data.get('count')} onIncrement={actions.increment} onDecrement={actions.decrement} />
        <Link to='/sample/todo'>todo</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
/*
// not use redux-actions
  return {
    onIncrement() { return dispatch(increment) },
    onDecrement() { return dispatch(decrement) }
  }
*/
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)