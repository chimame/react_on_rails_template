import fetch from 'isomorphic-fetch'

const csrfToken = document.getElementsByName('csrf-token').item(0).content
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
  return fetch(`/todos.json`)
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
  return fetch(`/todos`, {...params, ...{body: JSON.stringify({todo: {text: text}})}})
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then(payload => { return payload })
    .catch(error => { return undefined })
}

export const toggle = (id) => {
  return fetch(`/todos/${id}/toggle`, {...params, ...{method: 'PATCH'}})
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then(payload => { return payload })
    .catch(error => { return undefined })
}