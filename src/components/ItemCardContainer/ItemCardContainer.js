import React, { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import './ItemCardContainer.css';

function ItemCardContainer({ product }) {
  const [selected, setSelected] = useState(false);

  function handleSelection(selected) {
    console.log(`selected ${selected}`);
    setSelected(selected);
  }

  return (
    <div className={`itemCard`}>
      <img src={product.image.desktop} alt={product.name} className={`${selected ? 'selected' : ''}`} />
      <AddToCart item={product.name} price={product.price} onSelection={handleSelection} />
      <p className='category'>{product.category}</p>
      <h3 className='product.name'>{product.name}</h3>
      <h3 className='itemPrice'>{`$${product.price.toFixed(2)}`}</h3>
    </div>
  )
}

export default ItemCardContainer;