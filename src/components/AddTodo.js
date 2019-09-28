import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  state = { input: "" };

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div class="form-todo">
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          maxLength={20}
          autoFocus
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
