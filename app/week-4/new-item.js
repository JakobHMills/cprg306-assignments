'use client';
import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto mt-8 text-blue-500 bg-blue-100 p-6 rounded-md">
      <h2 className="text-lg text-center font-medium mb-4">Add An Item Here!</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full bg-white text-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 p-2 border rounded-md w-full bg-white text-gray-800"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full bg-white text-gray-800">
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
    </div>
  );
};

export default NewItem;
