import React from 'react';
import './App.css';
import ItemGrid from './components/ItemGrid/ItemGrid';
import { CartProvider } from './providers/CartProvider';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <CartProvider >
        <h1>Desserts</h1>
        <div className='mainLayout'>
          <ItemGrid />
          <Cart />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
