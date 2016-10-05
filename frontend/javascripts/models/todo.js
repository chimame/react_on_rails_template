import { Record, List } from 'immutable'

const TodoRecord = Record({id: 0, text: '', completed: false})

export default class Todo extends TodoRecord {
  getStyle() {
    return {
      textDecoration: this.get('completed') ? 'line-through' : 'none'
    }
  }
}