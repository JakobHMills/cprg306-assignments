import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
    <h1 className="text-3xl font-bold mb-6 text-center">Meal Ideas</h1>
      <h2 className="font-bold mb-3 text-center">Here are some meal ideas using {ingredient}:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} style={{ backgroundColor: '#007bff', padding: '8px', marginBottom: '8px', borderRadius: '5px', }}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
