import React from 'react'
import './css/AdminPanel.css'
const AdminPanel = () => {
  return (
    <div className='addProduct'>
      <div className='addProducts-form'>
        <h2>Add Product</h2>
        <label htmlFor='productname'>Product Name:</label>
        <input type='text' required/>

        <label htmlFor='price'>Price:</label>
        <input type='number' required/>

        <label htmlFor='description'>Description:</label>
        <textarea required></textarea>
        
        <label htmlFor='image-url'>Image URL:</label>
        <input type='text' required/>

        <button>Add the Products</button>
      </div>
    </div>
  )
}

export default AdminPanel
