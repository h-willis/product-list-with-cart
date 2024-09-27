import React, { useEffect, useState } from 'react';
import { useCart } from '../../providers/CartProvider';
import AddToCartInactive from './AddToCartInactive/AddToCartInactive';
import AddToCartActive from './AddToCartActive/AddToCartActive';

function AddToCart({ item, price, onSelection }) {
  const [amount, setAmount] = useState(0);
  const { dispatch, state } = useCart();

  // delete from here
  useEffect(() => {
    if (amount === 0) {
      dispatch({ type: 'removeItem', payload: { item } });
      onSelection(false);
      return;
    }
    console.log(`adding to cart ${item} ${price} ${amount}`);
    dispatch({ type: 'addToCart', payload: { item, price, amount } });
    onSelection(true);
  }, [amount]);

  // delete comes from cart
  useEffect(() => {
    if (!Object.hasOwn(state.cart, item)) {
      setAmount(0);
      onSelection(false);
    }
  }, [state]);

  // could make these their own components but they're not too complex
  return (
    <div>
      {amount === 0 ?
        <AddToCartInactive setAmount={setAmount} />
        :
        <AddToCartActive amount={amount} setAmount={setAmount} />
      }
    </div>
  )
}

export default AddToCart;