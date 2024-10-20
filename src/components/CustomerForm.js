// src/components/CustomerForm.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton, Grid, InputAdornment } from '@mui/material';
import { Close, AccountCircle, LocationCity, Public, Phone, Email, Home, Business } from '@mui/icons-material';
import '../styles/CustomerForm.css'; // Stil dosyası

const CustomerForm = ({ modalIsOpen, closeModal, addUser, editUser }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setCity(editUser.city);
      setCountry(editUser.country);
      setPhone(editUser.phone);
      setEmail(editUser.email);
      setAddress(editUser.address);
      setCompanyName(editUser.companyName);
    } else {
      setName('');
      setCity('');
      setCountry('');
      setPhone('');
      setEmail('');
      setAddress('');
      setCompanyName('');
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, city, country, phone, email, address, companyName };
    addUser(userData);
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
        {editUser ? 'Edit Customer' : 'Add Customer'}
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
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCity />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Public />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                label="Eposta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Home />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
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
            {editUser ? 'Save Changes' : 'Add Customer'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomerForm;
