import React from 'react';
import './App.css';
import ItemGrid from './components/ItemGrid/ItemGrid';
import { ProductsProvider } from './providers/ProductsProvider';
import { CartProvider } from './providers/CartProvider';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <ProductsProvider>
        <CartProvider >
          <div className='mainLayout'>
            <ItemGrid />
            <Cart />
          </div>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
