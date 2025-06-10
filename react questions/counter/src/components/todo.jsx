import React from 'react'
import { useState } from 'react'
const Todo = () => {
    const[task, setTask] = useState('') 
    const[todos, setTodos] = useState([])
  return (
    <>
<div className="container">
    <div className="top">
        <div className="search"><input type="text" /></div>
        <div className="button">Add</div>
    </div>
    <div className="bottom">
        <div className="value"></div>
        <div className="delete">Remove</div>
    </div>
</div>
    </>
  )
}

export default Todo