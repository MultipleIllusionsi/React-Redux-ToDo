import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  todos: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO: {
      const { id, content } = payload;
      return {
        todos: [
          ...state.todos,
          {
            content,
            id,
            completed: false
          }
        ]
      };
    }
    case REMOVE_TODO: {
      return {
        todos: state.todos.filter(todo => todo.id !== payload.id)
      };
    }
    case TOGGLE_TODO: {
      return {
        todos: state.todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    }
    default:
      return state;
  }
}
