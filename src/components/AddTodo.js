import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const updateInput = input => {
    setInput(input);
  };

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="form-todo">
      <input
        onChange={e => updateInput(e.target.value)}
        value={input}
        maxLength={20}
        autoFocus
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect(
  null,
  { addTodo }
)(AddTodo);
