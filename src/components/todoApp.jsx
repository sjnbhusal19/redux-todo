import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './todoApp.css'
import { addTodo, removeTodo } from '../redux/todoSlice'


const TodoApp = () => {
  const [todo, setTodo] = useState('')

  const todoData = useSelector((state) => state.todolist.value)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (todo.trim() !== "") {
      dispatch(addTodo(todo))
      setTodo("")
    }
  }


  return (
    <div className='container'>'
      <div className='main-app'>

        <h3>Todo App</h3>

        <input
          type='text'
          placeholder='Enter your Todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        {/* <button onClick={() => dispatch(addTodo(todo))} >Add</button> */}

        <button onClick={handleAdd}>  Add </button>

        {
          todoData.length > 0 && (
            <div>
              <h4>Todo list as:</h4>

              {todoData.map((list, index) => (
                <div key={index} >
                  {list}
                  <button onClick={() => dispatch(removeTodo(list))}>Delete</button>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>

  )
}

export default TodoApp