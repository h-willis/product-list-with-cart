import React, { useState } from 'react';
import Modal from '../ConfirmOrderSummaryModal/Modal/Modal';
import { useCart } from '../../../providers/CartProvider';
import CartSummaryItem from '../ConfirmOrderSummaryModal/CartSummaryItem/CartSummaryItem';
import OrderConfirmedIcon from '../../../icons/OrderConfirmedIcon';
import './ConfirmOrderButton.css'

function ConfirmOrderButton({ handleConfirm }) {

  return (
    <button onClick={handleConfirm}>Confirm Order</button>
  )
}

export default ConfirmOrderButton;