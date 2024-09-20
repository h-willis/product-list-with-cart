import React from 'react';
import { useCart } from '../../../providers/CartProvider';
import './CartItem.css';

function CartItem({ item, price, amount }) {
  const { dispatch } = useCart();

  function removeItem() {
    console.log(`remove item from cartItem`);
    dispatch({ type: 'removeItem', payload: { item } })
  }

  return (
    <div className='cartItem'>
      <div className='itemTotals'>
        <h3>{item}</h3>
        <p>{amount} @ ${price} ${amount * price}</p>
      </div>
      <div className='removeItem' onClick={removeItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
      </div>
    </div>
  )
}

export default CartItem;