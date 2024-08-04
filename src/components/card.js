import React from 'react'
import "./style.css";


const Card = ({heading, data}) => {
  return (
    <div >
      <h6>{heading}</h6>
      <p>{data}</p>
    </div>
  )
}

export default Card