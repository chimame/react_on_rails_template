import React          from 'react'
import { Route,
         IndexRoute } from 'react-router'
import Counter        from '../containers/Sample/Counter'
import Todos          from '../containers/Sample/Todos'

const Top = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default (
  <Route path="/sample" component={Top}>
    <IndexRoute component={Counter} />
    <Route path="todo" component={Todos} />
  </Route>
)
