import React from 'react';
import AddToCartIcon from '../../../icons/AddToCartIcon';
import './AddToCartInactive.css';

function AddToCartInactive({ setAmount }) {
  function handleClick() {
    setAmount(1);
  }

  return (
    <div className='inactive' onClick={handleClick}>
      <AddToCartIcon />
      <p>{`Add to Cart`}</p>
    </div>
  )
}

export default AddToCartInactive;