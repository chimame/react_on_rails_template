import React from 'react'
import {shallow} from 'enzyme'
import Sample from '../../javascripts/components/Sample'

describe('Sample', () => {
  const testFn = () => {}
  const sample = shallow(
    <Sample count={1} onIncrement={testFn} onDecrement={testFn}/>
  )

  it('Sample changes the text after click', () => {
    expect(sample.text()).toMatch(/カウント: 1回/)
  })
})
