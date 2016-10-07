import React, { PropTypes, Component } from 'react'

class AddTodo extends Component {
  render() {
    const { onRegist } = this.props
    return (
      <form onSubmit={e => {
        e.preventDefault()
        if (!this.refs.input.value.trim()) {
          return
        }
        onRegist(this.refs.input.value)
        this.refs.input.value = ''
      }}>
        <input ref="input" />
        <button type="submit">
          Add Todo
        </button>
      </form>
    )
  }
}

/*
const AddTodo = ({ onRegist, nextId }) => (
  <form onSubmit={e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    onRegist({id: nextId, text: input.value})
    input.value = ''
  }}>
    <input ref={node => {
      input = node
    }} />
    <button type="submit">
      Add Todo
    </button>
  </form>
)
*/

AddTodo.propTypes = {
  onRegist: PropTypes.func.isRequired,
}

export default AddTodo
