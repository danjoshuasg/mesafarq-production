// Modal.js
import React from 'react';
import './Modal.css'; // Asegúrate de crear un archivo CSS para estilizar tu modal.

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="btn-cerrar" onClick={close}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
