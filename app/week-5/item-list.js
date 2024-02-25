'use client';
import React, { useState } from 'react';
import items from './items.json';

const Item = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
);

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Item List</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>
          Sort by:
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              marginLeft: '5px',
              padding: '5px',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #ccc',
            }}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "#007bff" : "#ffffff",
            color: sortBy === "name" ? "#ffffff" : "#000000",
            padding: '8px 15px',
            marginRight: '5px',
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "#007bff" : "#ffffff",
            color: sortBy === "category" ? "#ffffff" : "#000000",
            padding: '8px 15px',
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}
        >
          Category
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {items
          .slice()
          .sort((a, b) => {
            if (sortBy === "name") {
              return a.name.localeCompare(b.name);
            } else if (sortBy === "category") {
              return a.category.localeCompare(b.category);
            }
            return 0;
          })
          .map((item) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;





