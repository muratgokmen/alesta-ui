// src/components/OrderList.js
import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from './ConfirmModal';
import Sidebar from './Sidebar';
import '../styles/Order.css'; // Stil dosyası
import OrderForm from './OrderForm';

const OrderList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [deleteOrderIndex, setDeleteOrderIndex] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditOrder(null);
  };

  const openConfirmModal = (index) => {
    setDeleteOrderIndex(index);
    setConfirmModalIsOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalIsOpen(false);
    setDeleteOrderIndex(null);
  };

  const addOrder = (orderData) => {
    if (editOrder !== null) {
      const updatedOrders = orders.map((order, index) =>
        index === editOrder ? { id: index + 1, ...orderData } : order
      );
      setOrders(updatedOrders);
    } else {
      setOrders([...orders, { id: orders.length + 1, ...orderData }]);
    }
    closeModal();
  };

  const handleEdit = (index) => {
    setEditOrder(index);
    openModal();
  };

  const handleDelete = (index) => {
    setConfirmModalIsOpen(false);
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'customerPhone', headerName: 'Customer Phone', flex: 1 },
    { field: 'productName', headerName: 'Product Name', flex: 1 },
    { field: 'productType', headerName: 'Product Type', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'depositPrice', headerName: 'Deposit Price', flex: 1 },
    { field: 'remainingAmount', headerName: 'Remaining Amount', flex: 1 },
    { field: 'deliveryDate', headerName: 'Delivery Date', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <button onClick={() => handleEdit(params.id - 1)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => openConfirmModal(params.id - 1)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </>
      ),
    },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  return (
    <>
      <Sidebar />
      <div className="orders-container">
        <div className="orders-header">
        <button className="open-modal-toolbar-button" onClick={openModal}>Add Order</button>
          <h1>Orders</h1>
        </div>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={orders}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            components={{
              Toolbar: CustomToolbar,
            }}
            autoHeight
            disableColumnResize
          />
        </div>
        <OrderForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          addOrder={addOrder}
          editOrder={editOrder !== null ? orders[editOrder] : null}
        />
        <ConfirmModal
          isOpen={confirmModalIsOpen}
          onRequestClose={closeConfirmModal}
          onConfirm={() => handleDelete(deleteOrderIndex)}
        />
      </div>
    </>
  );
};

export default OrderList;
