import React from 'react';
import { useCart } from '../../providers/CartProvider';

function Cart() {
  const { state } = useCart();

  return (
    <div>
      <div>
        CART
      </div>
      {/* {state.cart.map(item => (<p key={item.name}>{item.name}</p>))} */}
    </div>
  )
}

export default Cart;