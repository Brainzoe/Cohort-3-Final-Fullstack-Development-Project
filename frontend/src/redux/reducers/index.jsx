// src/redux/reducers/index.js
// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import userReducer from './userReducer';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   users: userReducer
// });

// src/redux/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import authReducer from './authReducer';
import foodReducer from './foodReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  food: foodReducer,
  order: orderReducer,
});

export default rootReducer;
