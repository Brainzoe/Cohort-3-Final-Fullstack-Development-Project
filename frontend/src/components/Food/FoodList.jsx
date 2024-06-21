import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodTypes } from '../../redux/actions/foodActions';
import FoodItem from './FoodItem';

const FoodList = () => {
  const dispatch = useDispatch();
  const foodTypes = useSelector((state) => state.food.foodTypes);

  useEffect(() => {
    dispatch(fetchFoodTypes());
  }, [dispatch]);

  return (
    <div>
      <h2>Food List</h2>
      {foodTypes.map((food) => (
        <FoodItem key={food._id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
