import React, { useState } from 'react';
import './css/Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  if (login) {
    return <Login />;
  }

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password validation function
  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  };

  function handlePost() {
    setError('');

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character'
      );
      return;
    }

    axios
      .post('http://localhost:5000/cosmetics/', { name, email, password })
      .then(() => {
        alert('Signup successfully!');
        setEmail('');
        setName('');
        setPassword('');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
        setError('Signup failed. Please try again.');
      });
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign-Up Page</h2>

        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <label htmlFor="Name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="Email">Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handlePost}>Submit</button>
        <p>
          Have an Account?{' '}
          <span
            style={{
              color: 'blue',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
            onClick={() => setLogin(true)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
