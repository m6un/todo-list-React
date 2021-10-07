import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageValues) {
      setTodos(storageValues);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className = "main">
      <div className="App">
        <header className="App-header">
          <p>To do List</p>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        </header>
      </div>
      <div className="footer">
  <h6>
    by - <a href="https://github.com/m6un">mi6un_</a> -
  </h6>
</div>;
    </div>
  );
}

export default App;

