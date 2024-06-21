import React from 'react';

const FoodItem = ({ food }) => {
  return (
    <div>
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>Price: ${food.price.toFixed(2)}</p>
    </div>
  );
};

export default FoodItem;
