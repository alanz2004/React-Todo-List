import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {

    super(props)

    this.state = {
         todos: [],
         todoInput: ''
      

    }
      this.handleTodo = this.handleTodo.bind(this);
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  handleTodo(event) {
    var currentInput = event.target.value;
    this.setState({
      todoInput: currentInput
    })
  }
  handleAddTodo() {
    this.setState({
      todos: this.state.todos.concat([this.state.todoInput]),
      todoInput: ''
    })
  }
  handleDeleteTodo(theTodoDelete) {
       this.setState((currentState) => {
         return {
          todos: currentState.todos.filter((todo) => todo !== theTodoDelete)
         }
       })
  }
  render() {
    return (
      <div className="App">
         <img src={logo} className="App-logo" alt="logo" />
      <div className="add-container">
      <input type="text" onChange={this.handleTodo} value={this.state.todoInput} placeholder="Type the todo"/>
      <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
        <TodoList list={this.state.todos} deleteFunction={this.handleDeleteTodo}/>
      </div>
    );
  }
}

export default App;
