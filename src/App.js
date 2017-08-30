import React, { Component } from "react";
import TodoTitle from "./Components/TodoTitle";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "./App.css";

//const todos = [{id : 1, value: 'Learn React', completed: true}, {id : 2, value: 'Learn Redux', completed: false}];

window.id = 1;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = val => {
    // Assemble data
    const todo = { text: val, id: window.id++, isCompleted: false };
    if (!todo.text) console.log("shit");
    // Update data
    this.state.todos.push(todo);
    // Update state
    this.setState({ todos: this.state.todos });
    //console.log(this.state.todos);
  };

  toggleTodo = id => {
    this.state.todos.map(todo => {
      if (todo.id === id) return (todo.isCompleted = !todo.isCompleted);
      else return null;
    });
    this.setState({ todos: this.state.todos });
  };

  render() {
    return (
      <div style={{ App }}>
        <TodoTitle />
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
