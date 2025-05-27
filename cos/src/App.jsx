import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Login from './Components/Login'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
