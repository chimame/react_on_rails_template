import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Counter from '../../javascripts/components/Counter/'

describe('Counter', () => {
  const testFn = () => {}
  const counter = TestUtils.renderIntoDocument(
    <Counter count={1} onIncrement={testFn} onDecrement={testFn}/>
  )
  const counterNode = ReactDOM.findDOMNode(counter)

  it('Counter changes the text after click', () => {
    expect(counterNode.textContent).toMatch(/カウント: 1回/)
  })
})
