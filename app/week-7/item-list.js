'use client';
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const renderItems = (itemsToRender) => {
    return itemsToRender.map((item) => (
      <Item key={item.id} item={item} onSelect={onItemSelect} />
    ));
  };

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const getSortedItems = () => {
    return items.slice().sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Item List</h2>

      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={handleSortByName}
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
          onClick={handleSortByCategory}
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
        {renderItems(getSortedItems())}
      </div>
    </div>
  );
};

export default ItemList;







