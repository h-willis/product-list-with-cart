import React from 'react';
import './AddToCartInactive.css';

function AddToCartInactive({ setAmount }) {
  function handleClick() {
    setAmount(1);
  }

  return (
    <div className='inactive' onClick={handleClick}>
      <img src='images/icon-add-to-cart.svg' alt='Add to cart icon' id='addToCartIcon' />
      <p>{`Add to Cart`}</p>
    </div>
  )
}

export default AddToCartInactive;