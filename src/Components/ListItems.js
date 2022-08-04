import React, { useRef } from 'react'

function ListItems({todo, setTodo}) {
  const deleteTodo = (id) => {
    setTodo(todo.filter(t => t.id !== id));
  }
  const toggleComplete = (id, e) => {
    setTodo(prevState => prevState.map((t) => {
      if(t.id === id) {
        return {...t, complete: !t.complete};
      }
      return t;
    }))
  };
  
  return (
    <div className="list-item">
      {todo.map((t) => {
        return (
          <span className='card' key={t.id}>
            <input onClick={(e) => toggleComplete(t.id, e)} type="checkbox" className='check' />
            <p style={t.complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{t.value}</p>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </span>
        )})}
    </div>
  )
}

export default ListItems