import React, { useState, useContext } from 'react';
import './css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // 👈 Import the context

const Login = () => {
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // 👈 Get login method

  function handlePost1() {
    axios.post("http://localhost:5000/cosmetics/login", { email1, password1 })
      .then(() => {
        alert("Logined !!");
        setEmail1('');
        setPassword1('');
        login(); // 👈 Set isLoggedIn = true
        navigate('/home');
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          console.error(err);
          alert("An error occurred. Please try again.");
        }
      });
  }

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Login Page</h2>

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
