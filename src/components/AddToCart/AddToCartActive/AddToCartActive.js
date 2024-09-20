import React from 'react';
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
      <div className='icon iconDec'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 2" onClick={decrementAmount}><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg>
      </div>
      <p>{amount}</p>
      <div className='icon iconInc'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" onClick={incrementAmount}><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
      </div>
    </div>
  )
}

export default AddToCartActive;