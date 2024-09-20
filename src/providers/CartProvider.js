import React, { useReducer, createContext, useContext } from 'react';

const cartContext = createContext();

const cartReducer = (state, action) => {
  console.log(`cart reducer ${action.type}`);
  const payload = action.payload;
  switch (action.type) {
    case 'addToCart': {
      console.log(`adding ${JSON.stringify(payload)} to cart`);
      const newCart = { cart: { ...state.cart, [payload.item]: { price: payload.price, amount: payload.amount } } };
      console.log(`new cart ${JSON.stringify(newCart)}`);
      return newCart;
    }
    case 'removeItem': {
      console.log(`removing itme ${payload.item}`);
      const newCart = { ...state.cart };
      delete newCart[payload.item];
      return { cart: newCart };
    }
    case 'clearCart':
      return { cart: [] };
    default:
      console.error(`Unknown cart reducer ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: {} });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export function useCart() {
  return useContext(cartContext);
}