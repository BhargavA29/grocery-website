import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CartPage from './pages/CartPage/CartPage';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import './App.css';


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/account" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<CartPage />} />
      </Routes>

    </div>
  );
};

export default App;
