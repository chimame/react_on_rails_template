import React from 'react'
import {shallow} from 'enzyme'
import Counter from '../../javascripts/components/Counter/'

describe('Counter', () => {
  const testFn = () => {}
  const counter = shallow(
    <Counter count={1} onIncrement={testFn} onDecrement={testFn}/>
  )

  it('Counter changes the text after click', () => {
    expect(counter.text()).toMatch(/カウント: 1回/)
  })
})
