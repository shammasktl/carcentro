import React from 'react'
import './Steps.css'

const Steps = ({img, title, description,count,color, ...props}) => {
  return (
    <div className='card' style={{
      background: color,
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px"
    }}>
      <img src={img} style={{
        width:40,
      }} alt="" />
      <h3>{count}. {title}</h3>
      <p style={{
        fontSize: "18px",
        lineHeight: "1.5"
      }}>{description}</p>
    </div>
  )
}

export default Steps
