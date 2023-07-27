import React from 'react'

function Pizza({photo, pizzaName, ingrediant, price, soldOut}) {
  
  if (soldOut)  return null

  return (
    <li className='pizza'>
      <img src={photo} alt="" />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingrediant}</p>
        <span>{price}</span>
      </div>
    </li>
  )
}

export default Pizza