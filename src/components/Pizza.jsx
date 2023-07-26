import React from 'react'

function Pizza({photo, pizzaName, ingrediant, price}) {
  return (
    <div className='pizza'>
      <img src={photo} alt="" />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingrediant}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default Pizza