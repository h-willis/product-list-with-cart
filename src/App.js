import React from 'react';
import './App.css';
import ItemGrid from './components/ItemGrid/ItemGrid';
import { CartProvider } from './providers/CartProvider';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <CartProvider >
        <div className='mainLayout'>
          <ItemGrid />
          <Cart />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
