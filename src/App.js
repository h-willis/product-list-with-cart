import React from 'react';
import './App.css';
import ItemGrid from './components/ItemGrid/ItemGrid';
import { CartProvider } from './providers/CartProvider';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <h1>Desserts</h1>
      <CartProvider >
        <Cart />
        <ItemGrid />
      </CartProvider>
    </>
  );
}

export default App;
