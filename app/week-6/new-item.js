'use client';
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      name,
      quantity,
      category,
    });
    
    setName('');
    setQuantity('1');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <div className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border rounded-md w-300 bg-white text-gray-800" 
          required
        />
      </div>

      <div className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="number"
          id="quantity"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 p-2 border rounded-md w-20 mr-2 bg-white text-gray-800"
          required
        />
        
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 border rounded-md w-200 ml-2 bg-white text-gray-800">          
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen-foods">Frozen Foods</option>
        <option value="canned-goods">Canned Goods</option>
        <option value="dry-goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mx-auto block">
        Submit
      </button>
    </form>
  );
};

export default NewItem;






