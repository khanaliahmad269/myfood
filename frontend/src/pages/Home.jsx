import React from 'react';
import FoodCard from '../components/FoodCard';

function Home() {
  const featuredFoods = [
    { id: 1, name: 'Cheeseburger', description: 'A delicious cheeseburger with all the fixings.', price: 5.99, image_url: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pizza Slice', description: 'A classic slice of pepperoni pizza.', price: 2.99, image_url: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Fries', description: 'Crispy golden fries.', price: 1.99, image_url: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to MyFood</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredFoods.map(food => (
          <FoodCard key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default Home;