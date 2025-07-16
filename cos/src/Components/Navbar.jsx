import React, { useContext } from 'react';
import './css/Navbar.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout, isAdminLoggedIn, adminLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAdminLogout = () => {
    adminLogout();
    navigate('/admin');
  };

  return (
    <div className='navbar'>
      <div className='img-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='nav-link'>
        {isAdminLoggedIn ? (
          <li>
            <button
              onClick={handleAdminLogout}
              style={{
                background: 'none',
                border: 'none',
                color: 'red',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Logout
            </button>
          </li>
        ) : isLoggedIn ? (
          <>
            <li><Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
            <li><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
            <li><Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></li>
            <li><Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>🛒 Cart</Link></li>
            <li>
              <button
                onClick={handleUserLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>SignUp</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></li>
            <li><Link to='/admin' style={{ textDecoration: 'none', color: 'inherit' }}>Admin</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
