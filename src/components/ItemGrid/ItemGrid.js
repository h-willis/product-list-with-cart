import React from 'react';
import ItemCardContainer from '../ItemCardContainer/ItemCardContainer';
import { useProducts } from '../../providers/ProductsProvider';
import './ItemGrid.css'

function ItemGrid() {
  const { products } = useProducts();

  return (
    <>
      <div>
        <h1>Desserts</h1>
        <div className='cardGrid'>
          {products.map(product => (
            <ItemCardContainer key={product.name} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ItemGrid;