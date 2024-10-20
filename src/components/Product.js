// src/components/product.js
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import '../styles/Product.css'; // Stil dosyası

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const addproduct = (product) => {
    setProducts([...products, product]);
  };

  const editProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.email === updatedProduct.email ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setProductToEdit(null);
  };

  const deleteproduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };
  
  return (
    <div className="product-page">
      <div className="product-content">
        <ProductForm addproduct={addproduct} editProduct={editProduct} productToEdit={productToEdit} />
        <ProductList products={products} deleteproduct={deleteproduct} setProductToEdit={setProductToEdit} />
      </div>
    </div>
  );
};

export default Product;
