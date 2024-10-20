// src/components/Customer.js
import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import '../styles/Customer.css'; // Stil dosyası

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [customerToEdit, setCustomerToEdit] = useState(null);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const editCustomer = (updatedCustomer) => {
    const updatedCustomers = customers.map((customer) =>
      customer.email === updatedCustomer.email ? updatedCustomer : customer
    );
    setCustomers(updatedCustomers);
    setCustomerToEdit(null);
  };

  const deleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };
  
  return (
    <div className="customer-page">
      <div className="customer-content">
        <CustomerForm addCustomer={addCustomer} editCustomer={editCustomer} customerToEdit={customerToEdit} />
        <CustomerList customers={customers} deleteCustomer={deleteCustomer} setCustomerToEdit={setCustomerToEdit} />
      </div>
    </div>
  );
};

export default Customer;
