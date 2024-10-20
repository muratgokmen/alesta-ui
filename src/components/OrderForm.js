// src/components/OrderForm.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton, Grid, InputAdornment, MenuItem } from '@mui/material';
import { Close, CalendarToday, Phone, ProductionQuantityLimits, AttachMoney, CalendarMonth, Payments } from '@mui/icons-material';
import '../styles/OrderForm.css'; // Stil dosyası

const OrderForm = ({ modalIsOpen, closeModal, addOrder, editOrder }) => {
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [price, setPrice] = useState('');
  const [depositPrice, setDepositPrice] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    if (editOrder) {
      setStatus(editOrder.status);
      setDate(editOrder.date);
      setCustomerPhone(editOrder.customerPhone);
      setProductName(editOrder.productName);
      setProductType(editOrder.productType);
      setPrice(editOrder.price);
      setDepositPrice(editOrder.depositPrice);
      setRemainingAmount(editOrder.remainingAmount);
      setDeliveryDate(editOrder.deliveryDate);
    } else {
      setStatus('');
      setDate('');
      setCustomerPhone('');
      setProductName('');
      setProductType('');
      setPrice('');
      setDepositPrice('');
      setRemainingAmount('');
      setDeliveryDate('');
    }
  }, [editOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = { status, date, customerPhone, productName, productType, price, depositPrice, remainingAmount, deliveryDate };
    addOrder(orderData);
    closeModal();
  };

  return (
    <Dialog open={modalIsOpen} onClose={closeModal} maxWidth="lg" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          position: 'relative',
        }}
      >
        {editOrder ? 'Edit Order' : 'Add Order'}
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Shipped">Shipped</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarToday />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Customer Phone"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ProductionQuantityLimits />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Product Type"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Deposit Price"
                value={depositPrice}
                onChange={(e) => setDepositPrice(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Payments />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Remaining Amount"
                value={remainingAmount}
                onChange={(e) => setRemainingAmount(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Delivery Date"
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonth />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="secondary">
            Close
          </Button>
          <Button type="submit" color="primary">
            {editOrder ? 'Save Changes' : 'Add Order'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default OrderForm;
