import { FILTERS } from '../constants'

export const getTodosState = store => store.todos

export const getTodosByFilter = (store, filter) => {
  const { todos } = getTodosState(store)
  const { COMPLETED, INCOMPLETE, ALL } = FILTERS

  switch (filter) {
    case COMPLETED:
      return todos.filter(todo => todo.completed)
    case INCOMPLETE:
      return todos.filter(todo => !todo.completed)
    case ALL:
    default:
      return todos
  }
}
