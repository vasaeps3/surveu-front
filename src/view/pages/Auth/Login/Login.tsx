import React, { Component } from 'react'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


interface CustomInputProps {
  todos: any[];
}

export default class Login extends Component<CustomInputProps> {


  render() {
    console.log(this.props.todos);
    return (
      <div className="Todo-App p-4">
        <TodoForm />
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}
