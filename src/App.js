import React, {useState} from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{

    setTodos([todo, ...todos])

  }

  return (
    <div className="App">
      <header className = "App-header">
        <p>To do List</p>
        <TodoForm addTodo = {addTodo}/>
        <TodoList todos = {todos}/>
      </header>


    </div>
  );
}

export default App;
