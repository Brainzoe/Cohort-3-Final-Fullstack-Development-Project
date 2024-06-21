// src/redux/actions/foodActions.js

import axios from 'axios';

export const FETCH_FOOD_TYPES_SUCCESS = 'FETCH_FOOD_TYPES_SUCCESS';
export const FETCH_FOOD_TYPES_FAILURE = 'FETCH_FOOD_TYPES_FAILURE';
export const CREATE_FOOD_TYPE_SUCCESS = 'CREATE_FOOD_TYPE_SUCCESS';
export const CREATE_FOOD_TYPE_FAILURE = 'CREATE_FOOD_TYPE_FAILURE';
export const UPDATE_FOOD_TYPE_SUCCESS = 'UPDATE_FOOD_TYPE_SUCCESS';
export const UPDATE_FOOD_TYPE_FAILURE = 'UPDATE_FOOD_TYPE_FAILURE';
export const DELETE_FOOD_TYPE_SUCCESS = 'DELETE_FOOD_TYPE_SUCCESS';
export const DELETE_FOOD_TYPE_FAILURE = 'DELETE_FOOD_TYPE_FAILURE';

export const fetchFoodTypes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/foodtypes'); // Replace with your actual API endpoint
      dispatch({ type: FETCH_FOOD_TYPES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_FOOD_TYPES_FAILURE, payload: error.message });
    }
  };
};

export const createFoodType = (newFoodType) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/foodtypes', newFoodType); // Replace with your actual API endpoint
      dispatch({ type: CREATE_FOOD_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_FOOD_TYPE_FAILURE, payload: error.message });
    }
  };
};

export const updateFoodType = (id, updatedFoodType) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/foodtypes/${id}`, updatedFoodType); // Replace with your actual API endpoint
      dispatch({ type: UPDATE_FOOD_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_FOOD_TYPE_FAILURE, payload: error.message });
    }
  };
};

export const deleteFoodType = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/foodtypes/${id}`); // Replace with your actual API endpoint
      dispatch({ type: DELETE_FOOD_TYPE_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_FOOD_TYPE_FAILURE, payload: error.message });
    }
  };
};
