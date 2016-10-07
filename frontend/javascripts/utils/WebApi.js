import fetch from 'isomorphic-fetch'
import $ from 'jquery'

const csrfToken = $('meta[name="csrf-token"]').attr('content')
const params = {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken
  }
}

export const getTodos = () => {
  return fetch(`http://localhost:5000/todos.json`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then(payload => { return payload })
    .catch(error => { return undefined })
}

export const addTodo = (text) => {
  params["body"] = JSON.stringify({todo: {text: text}})
  return fetch(`http://localhost:5000/todos`, params)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then(payload => { return payload })
    .catch(error => { return undefined })
}