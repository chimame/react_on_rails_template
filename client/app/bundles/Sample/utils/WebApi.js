import request from 'superagent'

const getCsrfToken = () => document.getElementsByName('csrf-token').item(0).content

export const getTodos = () => {
  return request.get(`/todos.json`)
    .then(res => res.body)
}

export const addTodo = (text) => {
  return request.post(`/todos`)
    .set("X-CSRF-Token", getCsrfToken())
    .send({todo: {text: text}})
    .then(res => res.body)
}

export const toggle = (id) => {
  return request.patch(`/todos/${id}/toggle`)
    .set("X-CSRF-Token", getCsrfToken())
    .then(res => res.body)
}
