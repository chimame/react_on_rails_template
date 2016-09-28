import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Sample from '../../javascripts/components/Sample'

describe('Sample', () => {
  const testFn = () => {}
  const sample = TestUtils.renderIntoDocument(
    <Sample count={1} onIncrement={testFn} onDecrement={testFn}/>
  )
  const sampleNode = ReactDOM.findDOMNode(sample)

  it('Sample changes the text after click', () => {
    expect(sampleNode.textContent).toMatch(/カウント: 1回/)
  })
})
