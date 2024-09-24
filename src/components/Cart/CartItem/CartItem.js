import React from 'react';
import { useCart } from '../../../providers/CartProvider';
import RemoveItemIcon from '../../../icons/RemoveItemIcon';
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
        <h3 className='cartItemName'>{item}</h3>
        <div className='subTotals'>
          <p className='stAmount'>{amount}x </p>
          <p className='stPrice'>@ ${price.toFixed(2)}</p>
          <p className='stTotal'>${(amount * price).toFixed(2)}</p>
        </div>
      </div>
      <div className='removeItem' onClick={removeItem}>
        <RemoveItemIcon />
      </div>
    </div>
  )
}

export default CartItem;