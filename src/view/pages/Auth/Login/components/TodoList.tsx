import React, { Component } from 'react'


const TodoItem = ({ id, name, isCompleted }: any) => (
  <li className="list-group-item">
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id={`idTodo_${id}`} defaultChecked={isCompleted} />
      <label className="custom-control-label" htmlFor={`idTodo_${id}`}>{name}</label>
    </div>
  </li>
)

export default (props: { todos: any[] }) => (
  <div className="Todo-List">
    <ul className="list-group">
      {props.todos.map(todo => <TodoItem {...todo} key={todo.id} />)}
    </ul>
  </div>
)
