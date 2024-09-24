import React, { useEffect, useState } from 'react';
import { useCart } from '../../providers/CartProvider';
import CartItem from './CartItem/CartItem';
import './Cart.css';
import ConfirmOrderButton from './ConfirmOrderButton/ConfirmOrderButton';
import EmptyCartIcon from '../../icons/EmptyCartIcon';
import CarbonNeutralIcon from '../../icons/CarbonNeutralIcon';
import ConfirmOrderSummaryModal from './ConfirmOrderSummaryModal/ConfirmOrderSummaryModal';

function Cart() {
  const { state } = useCart();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let cumTotal = 0;
    let priceCumTotal = 0;
    Object.entries(state.cart).forEach(([item, value]) => {
      cumTotal += value.amount;
      priceCumTotal += value.amount * value.price;
    })

    setTotalItems(cumTotal);
    setTotalPrice(priceCumTotal);
  }, [state.cart]);

  const [modalOpen, setModalOpen] = useState(false);
  function handleConfirm() {
    setModalOpen(true);
  }



  return (
    <div className='cart'>
      <h2>{`Your Cart (${totalItems})`}</h2>
      {totalItems === 0 ?
        <div className='emptyCart'>
          <EmptyCartIcon />
          <p>Your added items will appear here</p>
        </div>
        : <>
          {Object.entries(state.cart).map(([item, value]) => {
            return <CartItem key={item} item={item} price={value.price} amount={value.amount} />
          })}
          <div className='cartTotal'>
            <p>Order Total</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
          <div className='carbonNeutral'>
            <CarbonNeutralIcon />
            <div className='carbonNeutralText'>This is a <span className='carbonNeutralBold'>carbon-neutral</span> delivery</div>
          </div>
          <ConfirmOrderButton handleConfirm={handleConfirm} />
          <ConfirmOrderSummaryModal modalOpen={modalOpen} setModalOpen={setModalOpen} totalPrice={totalPrice} />
        </>
      }
    </div>
  )
}

export default Cart;