import React, { useContext } from 'react';
import './css/Navbar.css';
import logo from '../assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const hideCart = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className='navbar'>
      <div className='img-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='nav-link'>
        {!isLoggedIn && (
          <>
            <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>SignUp</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></li>
          </>
        )}
        <li><Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
        <li><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
        <li><Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></li>

        {isLoggedIn && !hideCart && (
          <li><Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>🛒 Cart</Link></li>
        )}

        {isLoggedIn && (
          <li>
            <button
              onClick={handleLogout}
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
        )}
      </ul>
    </div>
  );
};

export default Navbar;