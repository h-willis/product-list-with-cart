import React, { useEffect, useState } from 'react';
import { useCart } from '../../providers/CartProvider';
import CartItem from './CartItem/CartItem';
import './Cart.css';

function Cart() {
  const { state } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let cumTotal = 0;
    Object.entries(state.cart).forEach(([item, value]) => {
      cumTotal += value.amount;
    })

    setTotalItems(cumTotal);
  }, [state.cart]);


  return (
    <div className='cart'>
      <h2>{`Your Cart (${totalItems})`}</h2>
      {Object.entries(state.cart).map(([item, value]) => {
        return <CartItem key={item} item={item} price={value.price} amount={value.amount} />
      })}
    </div>
  )
}

export default Cart;