import React from 'react'
import Pizza from './Pizza'

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza pizzaName='something' ingrediant='another thing' photo='pizzas/margherita.jpg' price='12'/>
    </main>
  )
}

export default Menu