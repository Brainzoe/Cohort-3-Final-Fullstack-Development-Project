//src/redux/store.js

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './reducers/authReducer';
// import foodReducer from './reducers/foodReducer';
// import orderReducer from './reducers/orderReducer';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     food: foodReducer,
//     order: orderReducer,
//   },
// });

// export default store;
// src/redux/store.js
// src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk'; // Correctly import thunk
// import rootReducer from './reducers'; // Adjust the path as necessary

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import foodReducer from './reducers/foodReducer';
import orderReducer from './reducers/orderReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    food: foodReducer,
    order: orderReducer,
    user: userReducer,

  },
});

export default store;


