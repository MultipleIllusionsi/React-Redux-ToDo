import React from "react";
import Todo from "./Todo";

import { connect } from "react-redux";
import { getTodosByFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, _index) => {
          return (
            <Todo key={`todo-${todo.id}`} todo={todo} />
          );
        })
      : "There are no todos"}
  </ul>
);

const mapStateToProps = state => {
  const { filter } = state;
  const todos = getTodosByFilter(state, filter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
