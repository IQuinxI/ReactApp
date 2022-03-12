
import React from "react"
import TodoItem from "./TodoItem";
const TodosList = props => {
    return (
        <ul>
            {
                
                props.todos.map(todo => (
                    <TodoItem key={todo.id} 
                    todo={todo} 
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdatedProps={props.setUpdatedProps}/>
                    ))
            }
        </ul>
    )
}

export default TodosList