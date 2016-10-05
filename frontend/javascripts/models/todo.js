import { Record, List } from 'immutable'

const TodoRecord = Record({id: 0, text: '', completed: false})

export default class Todo extends TodoRecord {

}