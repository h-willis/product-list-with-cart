import React, { useState } from 'react';
import { useCart } from '../../providers/CartProvider';
import './AddToCart.css';

function AddToCart({ item, price }) {
  const [amount, setAmount] = useState(0);
  const { dispatch } = useCart();

  function addToCart() {
    setAmount(amount => {
      const newAmount = amount + 1;
      console.log(`adding to cart ${item} ${price} ${amount}`);
      dispatch({ type: 'addToCart', payload: { item, price, amount: newAmount } });
      return newAmount;
    });
  }

  return (
    <div className='addToCart' onClick={addToCart}>
      <img src={'images/icon-add-to-cart.svg'} alt='Add to cart icon' />
      <p>{`Add to Cart ${amount}`}</p>
    </div>
  )
}

export default AddToCart;