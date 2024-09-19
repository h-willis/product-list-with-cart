import React from 'react';
import './ItemCardContainer.css';
import AddToCart from '../AddToCart/AddToCart';

function ItemCardContainer({ imgSrc, category, name, price }) {
  return (
    <div className='itemCard'>
      <img src={imgSrc} alt={name} />
      <AddToCart item={name} price={price} />
      <p className='category'>{category}</p>
      <h3 className='name'>{name}</h3>
      <h3 className='price'>{`$${price.toFixed(2)}`}</h3>
    </div>
  )
}

export default ItemCardContainer;