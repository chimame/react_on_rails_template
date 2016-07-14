import React, { Component } from 'react'

export default class Counter extends Component {
  componentDidMount() {
    //SSRではここは呼ばれない（クライアント側では呼ばれる）なので実質2回呼ばれる
    console.log('componentDidMount')
  }

  componentWillMount() {
    //SSRでもここは呼ばれる
    console.log('componentWillMount')
  }

  render() {
    const { count, onIncrement, onDecrement } = this.props
    return (
      <div>
        <p>カウント: {count}回</p>
        <button onClick={onIncrement}>++</button>
        <button onClick={onDecrement}>--</button>
      </div>
    )
  }
}

/*
//ライフサイクルメソッド今回の例では「componentDidMount」や「componentWillMount」が必要ない場合は
//以下のように簡略してかける。
const Counter = (props) => {
  return(
    <div>
      <p>カウント: {props.count}回</p>
      <button onClick={props.onIncrement}>++</button>
      <button onClick={props.onDecrement}>--</button>
    </div>
  )
}

export default Counter
*/
