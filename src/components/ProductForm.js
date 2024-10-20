import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Checkbox, FormControlLabel, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/ProductForm.css'; // Stil dosyası

const ProductForm = ({ modalIsOpen, closeModal, addProduct, editProduct }) => {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (editProduct) {
      setProductName(editProduct.productName);
      setProductType(editProduct.productType);
      setIsActive(editProduct.isActive);
    } else {
      setProductName('');
      setProductType('');
      setIsActive(true);
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { productName, productType};
    addProduct(userData);
  };

  return (
    <Dialog open={modalIsOpen} onClose={closeModal} maxWidth="sm" fullWidth>
      <DialogTitle>
        {editProduct ? 'Edit Product' : 'Add Product'}
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            label="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="productType"
            type="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                name="isActive"
                color="primary"
              />
            }
            label="Active"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="secondary">
            Close
          </Button>
          <Button type="submit" color="primary">
            {editProduct ? 'Save Changes' : 'Add User'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ProductForm;
