import React, { useEffect, useState } from 'react';
import { useCart } from '../../providers/CartProvider';
import './AddToCart.css';
import AddToCartInactive from './AddToCartInactive/AddToCartInactive';
import AddToCartActive from './AddToCartActive/AddToCartActive';

function AddToCart({ item, price }) {
  const [amount, setAmount] = useState(0);
  const { dispatch } = useCart();

  useEffect(() => {
    if (amount === 0) {
      // TODO dispatch removeItem
      dispatch({ type: 'removeItem', payload: { item } });
      return;
    }
    console.log(`adding to cart ${item} ${price} ${amount}`);
    dispatch({ type: 'addToCart', payload: { item, price, amount } });
  }, [amount]);

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