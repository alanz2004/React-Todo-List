import React from 'react';

function TodoList(props) {
    return(
      <ul>
      {props.list.map((name) => (
        <li key={name}>
         <span>{name}</span>
         <button onClick={() =>props.deleteFunction(name)}>Delete</button>
        </li>
      ))}
      </ul>
    )
  }
export default TodoList;