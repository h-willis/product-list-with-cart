import React from 'react';

function CartItem({ item, price, amount }) {
  return (
    <div className='cartItem'>
      <h3>{item}</h3>
      <p>{amount} @ {price}</p>
    </div>
  )
}

export default CartItem;