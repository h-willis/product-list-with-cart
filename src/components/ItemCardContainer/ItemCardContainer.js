import React, { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import './ItemCardContainer.css';

function ItemCardContainer({ imgSrc, category, name, price }) {
  const [selected, setSelected] = useState(false);

  function handleSelection(selected) {
    console.log(`selected ${selected}`);
    setSelected(selected);
  }

  return (
    <div className={`itemCard`}>
      <img src={imgSrc} alt={name} className={`${selected ? 'selected' : ''}`} />
      <AddToCart item={name} price={price} onSelection={handleSelection} />
      <p className='category'>{category}</p>
      <h3 className='name'>{name}</h3>
      <h3 className='itemPrice'>{`$${price.toFixed(2)}`}</h3>
    </div>
  )
}

export default ItemCardContainer;