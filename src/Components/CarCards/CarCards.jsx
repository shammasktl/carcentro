import React from 'react'
import './CarCards.css'

const CarCards = ({title,top,img, ...props}) => {
  return (
    <div className='cards' style={{
        backgroundImage: `url(${img})`
    }}>
      <p>{top}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default CarCards
