// src/components/Order.js
import React, { useState } from 'react';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import '../styles/Order.css'; // Stil dosyası

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [orderToEdit, setOrderToEdit] = useState(null);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const editOrder = (updatedOrder) => {
    const updatedOrders = orders.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    setOrderToEdit(null);
  };

  const deleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <div className="order-page">
      <div className="order-content">
        <OrderForm addOrder={addOrder} editOrder={editOrder} orderToEdit={orderToEdit} />
        <OrderList orders={orders} deleteOrder={deleteOrder} setOrderToEdit={setOrderToEdit} />
      </div>
    </div>
  );
};

export default Order;
