import React from 'react'
import './css/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='img-logo'>
            <img src={logo} />
        </div>
      <ul className='nav-link'>
        <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>SignUp</Link></li>
        <li><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></li>
        <li><Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
        <li><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
        <li><Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></li>
        <li><Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>🛒 Cart</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
