import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ConfirmModal from './ConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import '../styles/Product.css'; // Stil dosyası

const ProductList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProductIndex, setDeleteProductIndex] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditProduct(null);
  };

  const openConfirmModal = (index) => {
    setDeleteProductIndex(index);
    setConfirmModalIsOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalIsOpen(false);
    setDeleteProductIndex(null);
  };

  const addProduct = (productData) => {
    if (editProduct !== null) {
      const updatedproducts = products.map((product, index) =>
        index === editProduct ? { id: index + 1, ...productData } : product
      );
      setProducts(updatedproducts);
    } else {
      setProducts([...products, { id: products.length + 1, ...productData }]);
    }
    closeModal();
  };

  const handleEdit = (index) => {
    setEditProduct(index);
    openModal();
  };

  const handleDelete = (index) => {
    setConfirmModalIsOpen(false);
    const updatedproducts = products.filter((_, i) => i !== index);
    setProducts(updatedproducts);
  };

  const handleStatusChange = (index) => {
    const updatedproducts = products.map((product, i) =>
      i === index ? { ...product, isActive: !product.isActive } : product
    );
    setProducts(updatedproducts);
  };

  const columns = [
    { field: 'id', headerName: 'ProductID', width: 90 },
    { field: 'productName', headerName: 'ProductName', width: 150 },
    { field: 'productType', headerName: 'Product Type', width: 200 },
    {
      field: 'isActive', headerName: 'Status', width: 120, renderCell: (params) => (
        <input
          type="checkbox"
          checked={params.value}
          onChange={() => handleStatusChange(params.id - 1)}
        />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
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
      <button className="open-modal-toolbar-button" onClick={openModal}>Add product</button>
        <h1>Products</h1>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={products}
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
        <ProductForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          addProduct={addProduct}
          editProduct={editProduct !== null ? products[editProduct] : null}
        />
        <ConfirmModal
          isOpen={confirmModalIsOpen}
          onRequestClose={closeConfirmModal}
          onConfirm={() => handleDelete(deleteProductIndex)}
        />
      </div>
    </>
  );
};

export default ProductList;
