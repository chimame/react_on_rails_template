import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Counter from '../../app/bundles/Sample/components/Counter/'

describe('Counter', () => {
  const subject = (incrementFn, decrementFn) => {
    return shallow(
      <Counter count={1} onIncrement={incrementFn} onDecrement={decrementFn}/>
    )
  }

  it('should be render Counter', () => {
    expect(shallowToJson(subject(jest.fn(), jest.fn()))).toMatchSnapshot()
  })

  it('should be handle increment', () => {
    const incrementMock = jest.fn()
    const decrementMock = jest.fn()
    subject(incrementMock, decrementMock).find('#increment').simulate('click')
    expect(incrementMock).toHaveBeenCalled()
    expect(decrementMock).not.toHaveBeenCalled()
  })

  it('should be handle decrement', () => {
    const incrementMock = jest.fn()
    const decrementMock = jest.fn()
    subject(incrementMock, decrementMock).find('#decrement').simulate('click')
    expect(incrementMock).not.toHaveBeenCalled()
    expect(decrementMock).toHaveBeenCalled()
  })
})
