import React, { PropTypes } from 'react'

const Todo = ({ onClick, todo }) => (
  <li
    onClick={onClick}
    style={todo.getStyle()}
  >
    {todo.get('text')}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
}

export default Todo
