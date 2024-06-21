// src/components/Admin/ManageFoodTypes.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFoodTypes,
  createFoodType,
  updateFoodType,
  deleteFoodType
} from '../../redux/actions/foodActions';

const ManageFoodTypes = () => {
  const dispatch = useDispatch();
  const foodTypes = useSelector((state) => state.foodReducer.foodTypes);
  const loading = useSelector((state) => state.foodReducer.loading);
  const error = useSelector((state) => state.foodReducer.error);

  const [newFoodType, setNewFoodType] = useState('');
  const [updateFoodTypeData, setUpdateFoodTypeData] = useState({ id: '', name: '' });

  useEffect(() => {
    dispatch(fetchFoodTypes());
  }, [dispatch]);

  const handleCreateFoodType = () => {
    dispatch(createFoodType({ name: newFoodType }));
    setNewFoodType('');
  };

  const handleUpdateFoodType = () => {
    dispatch(updateFoodType(updateFoodTypeData.id, { name: updateFoodTypeData.name }));
    setUpdateFoodTypeData({ id: '', name: '' });
  };

  const handleDeleteFoodType = (id) => {
    dispatch(deleteFoodType(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Manage Food Types</h2>
      <div>
        <h3>Create Food Type</h3>
        <input
          type="text"
          placeholder="Food Type"
          value={newFoodType}
          onChange={(e) => setNewFoodType(e.target.value)}
        />
        <button onClick={handleCreateFoodType}>Create</button>
      </div>

      <div>
        <h3>Update Food Type</h3>
        <input
          type="text"
          placeholder="ID"
          value={updateFoodTypeData.id}
          onChange={(e) => setUpdateFoodTypeData({ ...updateFoodTypeData, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Food Type"
          value={updateFoodTypeData.name}
          onChange={(e) => setUpdateFoodTypeData({ ...updateFoodTypeData, name: e.target.value })}
        />
        <button onClick={handleUpdateFoodType}>Update</button>
      </div>

      <div>
        <h3>Food Types List</h3>
        <ul>
          {foodTypes.map((foodType) => (
            <li key={foodType._id}>
              {foodType.name}
              <button onClick={() => handleDeleteFoodType(foodType._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageFoodTypes;
