import React, {useEffect, useState} from 'react'
import ListItems from './ListItems'

function List() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState(() =>{
    const localData = localStorage.getItem('todo');
    return localData ? JSON.parse(localData) : [];
  });
  const addTodo = (input) => {
    if(input) {
      setTodo(prevState => [...prevState, {id: Date.now(), value: input, complete: false}]);
      setInput('');
    }
  }
  const delAllTodos = () => {
    setTodo([]);
  }
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])
  return (
    <div className="list">
        <h1>Add Items To Todo List</h1>
        <div className="list-item-container">
            <div className="input-container">
                <input value={input} type="text" placeholder='Add Items..' 
                onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => addTodo(input)}>+</button>
            </div>
            <ListItems todo={todo} setTodo={setTodo} />
            {todo.length > 0 && <button className='delAll' onClick={delAllTodos}>Delete All</button>}
        </div>
    </div>
  )
}

export default List