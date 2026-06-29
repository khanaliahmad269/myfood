import React from 'react';
import FoodCard from './FoodCard';

function FoodList({ foods }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {foods.map(food => (
        <FoodCard key={food.id} {...food} />
      ))}
    </div>
  );
}

export default FoodList;