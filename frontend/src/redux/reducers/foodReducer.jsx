// src/redux/reducers/foodReducer.js

import {
  FETCH_FOOD_TYPES_SUCCESS,
  FETCH_FOOD_TYPES_FAILURE,
  CREATE_FOOD_TYPE_SUCCESS,
  CREATE_FOOD_TYPE_FAILURE,
  UPDATE_FOOD_TYPE_SUCCESS,
  UPDATE_FOOD_TYPE_FAILURE,
  DELETE_FOOD_TYPE_SUCCESS,
  DELETE_FOOD_TYPE_FAILURE
} from '../actions/foodActions';

const initialState = {
  foodTypes: [],
  loading: false,
  error: null
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_TYPES_SUCCESS:
      return { ...state, foodTypes: action.payload, loading: false, error: null };
    case FETCH_FOOD_TYPES_FAILURE:
    case CREATE_FOOD_TYPE_FAILURE:
    case UPDATE_FOOD_TYPE_FAILURE:
    case DELETE_FOOD_TYPE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_FOOD_TYPE_SUCCESS:
      return { ...state, loading: false, error: null };
    case UPDATE_FOOD_TYPE_SUCCESS:
      return { ...state, loading: false, error: null };
    case DELETE_FOOD_TYPE_SUCCESS:
      return {
        ...state,
        foodTypes: state.foodTypes.filter((foodType) => foodType._id !== action.payload),
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default foodReducer;
