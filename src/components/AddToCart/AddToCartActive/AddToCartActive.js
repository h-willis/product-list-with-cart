import React from 'react';
import DecrementIcon from '../../../icons/DecrementIcon';
import IncrementIcon from '../../../icons/IncrementIcon';
import './AddToCartActive.css';

function AddToCartActive({ amount, setAmount }) {
  function incrementAmount() {
    setAmount(value => value + 1);
  }

  function decrementAmount() {
    setAmount(value => value - 1);
  }

  return (
    <div className='active'>
      <div className='iconContainer iconDec' onClick={decrementAmount}>
        <DecrementIcon />
      </div>
      <p>{amount}</p>
      <div className='iconContainer iconInc' onClick={incrementAmount}>
        <IncrementIcon />
      </div>
    </div>
  )
}

export default AddToCartActive;