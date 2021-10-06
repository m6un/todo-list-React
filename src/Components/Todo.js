import React from 'react'
import {List, Checkbox, IconButton} from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';

function Todo({todo, toggleComplete, removeTodo}) {

    function handleCheckBoxClick(){
        toggleComplete(todo.id)
    }

    function handleButtonClick(){
        removeTodo(todo.id)
    }

    return (
        <div className = "todo-row">
            <Checkbox checked = {todo.completed} type="checkbox" onClick = {handleCheckBoxClick} style = {{color: "white"}}/>
            <List style = {{
                listStyleType: 'none',
                color: "white",
                fontWeight: "600", 
                textDecoration : todo.completed ? "line-through" : null
                }}>
                {todo.task}
            </List>
            <IconButton onClick = {handleButtonClick}><CancelIcon style = {{color : "black"}}/></IconButton>
        </div>
    )
}

export default Todo
