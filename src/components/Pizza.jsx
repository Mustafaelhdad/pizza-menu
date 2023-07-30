import React from 'react'

function Pizza({photo, pizzaName, ingrediant, price, soldOut}) {
  
  // if (soldOut) return null

  return (
    <li className={`pizza ${soldOut? "sold-out":""}`}>
      <img src={photo} alt="" />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingrediant}</p>
        {soldOut ? (<span>SOLD OUT</span>) : (<span>{price}</span>)}
      </div>
    </li>
  )
}

export default Pizza