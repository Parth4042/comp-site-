import React from 'react';

const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div style={modalOverlayStyles}>
      <div style={modalStyles}>
        <button style={closeButtonStyles} onClick={onClose}>Close</button>
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} style={imageStyles} />
        <p>{event.details}</p>
      </div>
    </div>
  );
};

// Styles for the modal components
const modalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '800px',
  width: '90%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
};

const closeButtonStyles = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  position: 'absolute',
  right: '15px',
  top: '15px',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

export default Modal;
