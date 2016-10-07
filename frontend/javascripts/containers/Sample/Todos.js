import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Sample/todos'
// not use redux-actions
//import {add, toggle} from '../../actions/Sample/todos'

import TodoList from '../../components/TodoList'
import AddTodo from '../../components/AddTodo'
import {addTodo} from '../../utils/WebApi'

class Todos extends Component {
  constructor(props) {
    super(props)
//    this.state = {data: {}}
  }

  componentDidMount() {
    const { actions } = this.props
    actions.get()
  }

  render() {
    const { data, actions } = this.props
    return (
      <div>
        <TodoList todos={data} onTodoClick={actions.toggle} />
        <AddTodo onRegist={(text) => {actions.add(addTodo(text))}} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
/*
// not use redux-actions
  return {
    onRegist() { return dispatch(add) },
    onTodoClick() { return dispatch(toggle) }
  }
*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)