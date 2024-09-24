import React from 'react';
import { useProducts } from '../../../../providers/ProductsProvider';
import './CartSummaryItem.css';

function CartSummaryItem({ item, amount, price }) {
  const { products } = useProducts();

  return (
    <div className='cartSummaryItem'>
      <img src={products.find(product => product.name === item)?.image.thumbnail} alt={`${item} thumbnail`} />
      <div className='csLeftSummary'>
        <h3 className='csName'>{item}</h3>
        <div className='amountPrice'>
          <p className='csAmount'>{amount}x </p>
          <p className='csPrice'>@ ${price.toFixed(2)}</p>
        </div>
      </div>
      <p className='csItemTotal'>${(amount * price).toFixed(2)}</p>
    </div>
  )
}

export default CartSummaryItem;