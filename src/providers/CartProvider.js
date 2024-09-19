import React, { useReducer, createContext, useContext } from 'react';

const cartContext = createContext();

// [
//   {item, price, amount},
//   {item, price, amount}
// ]

const cartReducer = (state, action) => {
  console.log(`cart reducer ${action.type}`);
  const payload = action.payload;
  switch (action.type) {
    case 'addToCart':
      console.log(`adding ${payload} to cart`);
      return { cart: [...state.cart, { item: payload.item, price: payload.price, amount: payload.amount }] };
    case 'clearCart':
      return { cart: [] };
    default:
      console.error(`Unknown cart reducer ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export function useCart() {
  return useContext(cartContext);
}