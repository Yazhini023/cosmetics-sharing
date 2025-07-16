import React, { useState, useContext } from 'react';
import './css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password validation
  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  };

  function handlePost1() {
    setError('');

    if (!email1 || !password1) {
      setError('Both fields are required.');
      return;
    }

    if (!isValidEmail(email1)) {
      setError('Enter a valid email address.');
      return;
    }

    if (!isValidPassword(password1)) {
      setError(
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    axios
      .post('http://localhost:5000/cosmetics/login', { email1, password1 })
      .then(() => {
        setEmail1('');
        setPassword1('');
        login();
        navigate('/home');
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          console.error(err);
          setError('An error occurred. Please try again.');
        }
      });
  }

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Login Page</h2>

        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <label htmlFor='Email'>Email: </label>
        <input
          type='text'
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />

        <label htmlFor='pass'>Password: </label>
        <input
          type='password'
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />

        <button onClick={handlePost1}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
