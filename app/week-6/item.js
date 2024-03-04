import React from 'react';

const Item = ({ item }) => (
  <div style={{ backgroundColor: '#007bff', padding: '10px', margin: '10px', borderRadius: '5px' }}>
    <h3>{item.name}</h3>
    <p>Quantity: {item.quantity}</p>
    <p>Category: {item.category}</p>
  </div>
);

export default Item;



