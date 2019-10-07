import React from "react";
import { connect } from "react-redux";

import { toggleTodo, removeTodo } from "../redux/actions";
import { ReactComponent as TrashIcon } from "../assets/trash-icon.svg";

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li onClick={() => toggleTodo(todo.id)} className="todo-item">
      <span
        className={`
        todo-item__text 
        ${todo && todo.completed && "todo-item__text--completed"}
      `}
      >
        {todo.content}
      </span>
      <TrashIcon
        onClick={e => {
          e.stopPropagation();
          removeTodo(todo.id);
        }}
        className="todo-item__trash"
      />
    </li>
  );
};

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
