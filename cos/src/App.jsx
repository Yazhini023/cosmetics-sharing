import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Products from './Components/Products';
import ProductsDetail from './Components/ProductsDetails';
import Cart from './Components/Cart';
import AdminLogin from './Components/AdminLogin';
import AdminPanel from './Components/AdminPanel';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLogin />} />

            {/* User Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductsDetail />} />
            <Route path="/cart" element={<Cart />} />

            {/* Admin Routes */}
            <Route path="/adminpanel" element={<AdminPanel />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
