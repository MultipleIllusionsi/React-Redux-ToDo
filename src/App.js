import React from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
