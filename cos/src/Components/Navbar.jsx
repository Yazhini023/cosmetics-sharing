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
        <Link to='/'>SignUp</Link>
        <Link to='/login'>Login</Link>
        <Link to='/home'>Home</Link>
        <Link to='/about'> About </Link>
      </ul>
    </div>
  )
}

export default Navbar
