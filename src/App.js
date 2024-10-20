import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Customer from "./components/Customer";
import Product from "./components/Product";
import HomePage from "./components/HomePage";
import Order from "./components/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

const Layout = () => {
  return (

      <div className="app">
     
        <div className="content">
          <Routes>
          <Route path="/homepage" element={<HomePage />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </div>
      </div>

  );
};

export default App;
