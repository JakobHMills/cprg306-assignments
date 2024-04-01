'use client';
import React, { useState, useEffect } from 'react';
import { getItems, addItem } from './_services/shopping-list-service';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

const ShoppingList = ({ user }) => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems); 
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  useEffect(() => {
    loadItems(); 
  }, [user.uid]); 

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      newItem.id = newItemId; 
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
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

export default ShoppingList;
