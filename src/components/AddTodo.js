import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const updateInput = value => {
    setValue(value);
  };

  const handleAddTodo = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <div className="form-todo">
      <input
        onChange={e => updateInput(e.target.value)}
        value={value}
        maxLength={20}
        autoFocus
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
