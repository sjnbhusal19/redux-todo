
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

<div className='flex gap-10 m-2 mr-10 '>

 <Link to={'/'}>
 <div >Home</div>
 </Link> 

 <Link to={'/trending'} >
 <div >Trending</div>
 </Link>

 <Link to={'/categories'}>
 <div >Categories</div>
 </Link> 

 <Link to={'/favorites'}>
 <div >Favorites</div>
 </Link>

  <div >Search Bar</div>

  <div >Offline indicator</div>
  <div >Profile</div>
  </div>
  </div>
  )
}

export default NewsHub