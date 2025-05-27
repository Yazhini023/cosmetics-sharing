import React, { useState } from 'react'
import './css/Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [login,setlogin]=useState(false)
    const navigate=useNavigate()
    if(login){
      return <Login />
    }

    function handlePost(){
        axios.post("http://localhost:5000/cosmetics/",{name, email, password})
        .then(() => {
          alert("Data has been posted")
          setEmail('')
          setName('')
          setPassword('')
          navigate('/login')
        })
        .catch((err) => {
          console.error(err);
        })
    }
  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Sign-Up Page</h2>
        <label htmlFor='Name'>Name: </label>
        <input type='text' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor='Email'>Email: </label>
        <input type='text' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor='pass'>Password: </label>
        <input type='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handlePost}>Submit</button>
        <p>
          Have an Account{' '}
          <span 
          style={{color:'blue',cursor:'pointer',textDecoration:'underline'}}
          onClick={() => setlogin(true)}>Login</span>
        </p>
      </div>
    </div>
  )
}

export default Signup
