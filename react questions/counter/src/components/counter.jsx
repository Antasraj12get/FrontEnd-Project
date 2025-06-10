import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const[count, setCount] = useState(0);
    const increase = () => {
        setCount(count+1);
    }
    const decrease = () => {
        setCount(count-1);
    }
  return (
    <>
    <h1>its a counter function</h1>
    <h2>current count is {count}</h2>
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default Counter