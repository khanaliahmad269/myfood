import React from 'react';

function FoodCard({ name, description, price, image_url }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image_url} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-800 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default FoodCard;