import { FILTERS } from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allTodos : [];

// export const getTodoById = (store, id) =>
//   getTodosState(store)
//     ? { ...getTodosState(store).byIds[id], id }
//     : {};

// export const getTodos = store =>
//   getTodoList(store).map(id => getTodoById(store, id));

// export const getTodosByFilter = (store, filter) => {
//   const allTodos = getTodos(store);
//   const { COMPLETED, INCOMPLETE, ALL } = FILTERS;

//   switch (filter) {
//     case COMPLETED:
//       return allTodos.filter(todo => todo.completed);
//     case INCOMPLETE:
//       return allTodos.filter(todo => !todo.completed);
//     case ALL:
//     default:
//       return allTodos;
//   }
// };
