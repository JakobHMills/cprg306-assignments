'use client';
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    newItem.id = Math.random().toString();
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="container mx-auto p-4 flex">
      <div className="flex-1 pr-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
