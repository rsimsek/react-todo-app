import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  const todoNode = todos.map(todo => {
    return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />;
  });

  return (
    <ul>
      {todoNode}
    </ul>
  );
};

export default TodoList;
