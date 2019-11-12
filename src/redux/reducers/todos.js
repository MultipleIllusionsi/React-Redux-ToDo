import uuid from "uuid/v4";

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes";

const INITIAL_STATE = {
  todos: [],
};

const todos = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ADD_TODO: {
      const { content } = payload;
      return {
        todos: [
          ...state.todos,
          {
            content,
            id: uuid(),
            completed: false,
          },
        ],
      };
    }
    case REMOVE_TODO: {
      return {
        todos: state.todos.filter(
          todo => todo.id !== payload.id
        ),
      };
    }
    case TOGGLE_TODO: {
      return {
        todos: state.todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    default:
      return state;
  }
};

export default todos;
