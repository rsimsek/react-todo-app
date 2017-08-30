import React from "react";

const validateInput = () => {
  return <p>Add todo please</p>;
};

const TodoForm = ({ addTodo }) => {
  // Input tracker
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          input.value ? addTodo(input.value) : validateInput();
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
