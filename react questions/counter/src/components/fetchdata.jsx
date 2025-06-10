import React from 'react'
import FetchApi from './fetchApi'
const Fetchdata = (props) => {
  return (
    <div className="container">
        <h1>List of all existing product is here</h1>
        <h3>{props.title}</h3>
    </div>
  )
}

export default Fetchdata