import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allTodos: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO: {
      const { id, content } = payload;
      return {
        allTodos: [
          ...state.allTodos,
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
        allTodos: state.allTodos.filter(
          todo => todo.id !== payload.id
        )
      };
    }
    case TOGGLE_TODO: {
      const indexTodo = state.allTodos.find(
        todo => todo.id === payload.id
      );
      return {
        allTodos: [...state.allTodos]
      };
    }
    default:
      return state;
  }
}
