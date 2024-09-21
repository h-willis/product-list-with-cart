import React, { useState } from 'react';
import Modal from './Modal/Modal';
import { useCart } from '../../../providers/CartProvider';
import CartSummaryItem from './CartSummaryItem/CartSummaryItem';
import OrderConfirmedIcon from '../../../icons/OrderConfirmedIcon';
import './ConfirmOrderButton.css'

function ConfirmOrderButton({ totalPrice }) {
  const [modalOpen, setModalOpen] = useState(false);
  function handleConfirm() {
    setModalOpen(true);
  }

  const { state, dispatch } = useCart();
  function handleNewOrder() {
    dispatch({ type: 'clearCart' });
    setModalOpen(false);
  }

  return (
    <>
      <button onClick={handleConfirm}>Confirm Order</button>
      <Modal isOpen={modalOpen}>
        <div className='confirmOrderModal'>
          <OrderConfirmedIcon />
          <h1 className='orderConfirmed'>Order Confirmed</h1>
          <p className='enjoyYourFood'>We hope you enjoy your food!</p>
          <div className='orderSummary'>
            {Object.entries(state.cart).map(([key, value]) => (
              <CartSummaryItem item={key} amount={value.amount} price={value.price} />
            ))}
            <div className='orderTotal'>
              <p>Order Total</p>
              <h2>${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
          <button onClick={handleNewOrder}>Start New Order</button>
        </div>
      </Modal>
    </>
  )
}

export default ConfirmOrderButton;