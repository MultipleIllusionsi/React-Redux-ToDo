import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const updateInput = value => {
    setValue(value);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="form-todo">
      <input
        onChange={e => updateInput(e.target.value)}
        value={value}
        maxLength={20}
        autoFocus
      />
      <button type="submit" onClick={handleAddTodo}>
        Add Todo
      </button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
