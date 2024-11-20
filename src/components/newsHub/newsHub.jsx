
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const NewsHub = () => {

    // const todoData = useSelector((state) => state.todolist.value)
    // const dispatch = useDispatch()
  {/* <button onClick={() => dispatch(removeTodo(list))}>Button</button> */}

  return (
    <div className='p-1 items-center flex justify-between bg-purple-800 text-white'>
      <Link to={'/'}>
      <div>Logo</div>
      </Link>
<h4>Personalized News Hub</h4>

<div className='flex gap-10 m-2 mr-10 '>

 <Link to={'/'}>
 <div className='hover:text-lg hover:font-semibold'>Home</div>
 </Link> 

  <div className='hover:text-lg hover:font-semibold'>About</div>
  <div className='hover:text-lg hover:font-semibold'>Contact</div>
  <div className='hover:text-lg hover:font-semibold'>Service</div>
  </div>
  </div>
  )
}

export default NewsHub