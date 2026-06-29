import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FoodList from '../components/FoodList';

function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('/api/foods');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <FoodList foods={foods} />
    </div>
  );
}

export default Menu;