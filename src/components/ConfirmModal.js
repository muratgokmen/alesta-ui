import React from 'react';
import Modal from 'react-modal';
import '../styles/ConfirmModal.css';

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Deletion"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#f0f8ff',
          border: '1px solid #ccc',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }
      }}
    >
      <h2 className="modal-header">Confirm Deletion</h2>
      <p>Are you sure you want to delete this user?</p>
      <div className="modal-actions">
        <button onClick={onConfirm} className="confirm-button">Yes</button>
        <button onClick={onRequestClose} className="cancel-button">No</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
