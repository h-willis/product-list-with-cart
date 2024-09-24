import React from 'react';
import './Modal.css';

function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}


export default Modal;