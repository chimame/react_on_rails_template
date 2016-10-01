import React, { Component } from 'react'

import Counter from './Counter'
import Todos from './Todos'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Todos />
      </div>
    )
  }
}

export default App
