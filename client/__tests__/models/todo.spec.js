import Todo from '../../app/bundles/Sample/models/todo'

describe('Todo', () => {
  describe('getStyle()', () => {
    it('Styles of textDecoration is line-through when completed', () => {
      const todo = new Todo({completed: true})
      expect(todo.getStyle().textDecoration).toBe('line-through')
    })

    it('Styles of textDecoration is none when not completed', () => {
      const todo = new Todo({completed: false})
      expect(todo.getStyle().textDecoration).toBe('none')
    })
  })
})
