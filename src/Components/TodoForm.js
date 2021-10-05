
import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()})
            setTodo({...todo, task: ""});
        }
    }

    return (
        <form className="todo-form" onSubmit = {handleSubmit}>
            <input
                type="text"
                placeholder="to do"
                value={todo.task}
                name="text"
                className="todo-input"
                onChange = {handleTaskInputChange}
            />
            <button className = "todo-button" type  = "submit">Add todo</button>
        </form>
    )
}

export default TodoForm