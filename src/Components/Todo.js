import React from "react";

const Todo = ({todo, toggleTodo}) => {
    return (
      <li onClick={() => {toggleTodo(todo.id)}} style={{
        textDecoration: todo.isCompleted ? 'line-through' : 'none'
      }}>
        {todo.text}
      </li>
    );
  };

export default Todo;
