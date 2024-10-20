// src/components/CustomerList.js
import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from './ConfirmModal';
import Sidebar from './Sidebar';
import '../styles/Customer.css'; // Stil dosyası
import CustomerForm from './CustomerForm';

const CustomerList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null);
  const [deleteCustomerIndex, setDeleteCustomerIndex] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditCustomer(null);
  };

  const openConfirmModal = (index) => {
    setDeleteCustomerIndex(index);
    setConfirmModalIsOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalIsOpen(false);
    setDeleteCustomerIndex(null);
  };

  const addUser = (userData) => {
    if (editCustomer !== null) {
      const updatedCustomers = customers.map((user, index) =>
        index === editCustomer ? { id: index + 1, ...userData } : user
      );
      setCustomers(updatedCustomers);
    } else {
      setCustomers([...customers, { id: customers.length + 1, ...userData }]);
    }
    closeModal();
  };

  const handleEdit = (index) => {
    setEditCustomer(index);
    openModal();
  };

  const handleDelete = (index) => {
    setConfirmModalIsOpen(false);
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  const columns = [
    { field: 'id', headerName: 'Sr. No.', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 2 },
    { field: 'city', headerName: 'City', flex: 2 },
    { field: 'country', headerName: 'Country', flex: 2 },
    { field: 'phone', headerName: 'Phone', flex: 2 },
    { field: 'email', headerName: 'Eposta', flex: 3 },
    { field: 'address', headerName: 'Address', flex: 3 },
    { field: 'companyName', headerName: 'Company Name', flex: 2 },
    { field: 'createdDate', headerName: 'Created Date', flex: 2, renderCell: () => new Date().toLocaleDateString() },
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
      <div className="customers-container">
      <button className="open-modal-toolbar-button" onClick={openModal}>Add Customer</button>
        <h1>Customers</h1>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={customers}
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
        <CustomerForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          addUser={addUser}
          editUser={editCustomer !== null ? customers[editCustomer] : null}
        />
        <ConfirmModal
          isOpen={confirmModalIsOpen}
          onRequestClose={closeConfirmModal}
          onConfirm={() => handleDelete(deleteCustomerIndex)}
        />
      </div>
    </>
  );
};

export default CustomerList;
