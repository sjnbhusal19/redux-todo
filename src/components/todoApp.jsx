import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const TodoApp = () => {

    const todoData = useSelector((state) => state.todolist.value)
    console.log(todoData)
    const dispatch = useDispatch()
  return (
    <div>TodoApp</div>
  )
}

export default TodoApp