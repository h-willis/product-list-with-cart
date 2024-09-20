import React, { useState, useEffect } from 'react';
import ItemCardContainer from '../ItemCardContainer/ItemCardContainer';
import './ItemGrid.css'

function ItemGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading JSON:', error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <div>
        <h1>Desserts</h1>
        <div className='cardGrid'>
          {products.map(product => (
            <ItemCardContainer imgSrc={product.image.desktop} category={product.category} name={product.name} price={product.price} key={product.name} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ItemGrid;