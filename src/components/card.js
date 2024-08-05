import React from 'react'
import "./style.css";


const Card = ({heading, data}) => {
  return (
    <div className='weather-card'>
      <div>
      <h6>{heading}</h6>
      <p className='data'>{data}</p>
    </div>
    </div>
  )
}

export default Card