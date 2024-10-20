// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Menu } from '@mui/material';
import { Home, People, ShoppingCart, Logout, Menu as MenuIcon } from '@mui/icons-material';
import '../styles/Sidebar.css'; // Stil dosyası

const Sidebar = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  const menuItems = [
    { text: 'HomePage', icon: <Home />, link: '/homepage' },
    { text: 'Customers', icon: <People />, link: '/customers' },
    { text: 'Products', icon: <ShoppingCart />, link: '/products' },
    { text: 'Order', icon: <ShoppingCart />, link: '/orders' },
    { text: 'Log out', icon: <Logout />, action: handleLogout },
  ];

  return (
    <div className="sidebar">
      <h2>   Menu</h2>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={item.link ? Link : 'div'}
            to={item.link}
            onClick={item.action ? item.action : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
