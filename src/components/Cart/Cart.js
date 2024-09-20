import React, { useEffect, useState } from 'react';
import { useCart } from '../../providers/CartProvider';
import './Cart.css';
import CartItem from './CartItem/CartItem';

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
      <h1>{`Your Cart (${totalItems})`}</h1>
      {Object.entries(state.cart).map(([item, value]) => {
        return <CartItem key={item} item={item} price={value.price} amount={value.amount} />
      })}
    </div>
  )
}

export default Cart;