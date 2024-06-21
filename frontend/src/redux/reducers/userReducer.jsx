// // src/redux/reducers/userReducer.js
// import {
//     USER_SIGNUP_REQUEST,
//     USER_SIGNUP_SUCCESS,
//     USER_SIGNUP_FAILURE,
//     USER_LOGIN_REQUEST,
//     USER_LOGIN_SUCCESS,
//     USER_LOGIN_FAILURE,
//     USER_PROFILE_REQUEST,
//     USER_PROFILE_SUCCESS,
//     USER_PROFILE_FAILURE,
//     USER_PROFILE_UPDATE_REQUEST,
//     USER_PROFILE_UPDATE_SUCCESS,
//     USER_PROFILE_UPDATE_FAILURE,
//   } from '../actions/userAuthActions';
  
//   const initialState = {
//     user: null,
//     isAuthenticated: false,
//     loading: false,
//     error: null,
//     users: [], // Add users array to state if needed
//   };
  
//   const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case USER_SIGNUP_REQUEST:
//       case USER_LOGIN_REQUEST:
//       case USER_PROFILE_REQUEST:
//       case USER_PROFILE_UPDATE_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case USER_SIGNUP_SUCCESS:
//       case USER_LOGIN_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isAuthenticated: true,
//           user: action.payload,
//           error: null,
//         };
//       case USER_PROFILE_SUCCESS:
//       case USER_PROFILE_UPDATE_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           user: action.payload,
//           error: null,
//         };
//       case USER_SIGNUP_FAILURE:
//       case USER_LOGIN_FAILURE:
//       case USER_PROFILE_FAILURE:
//       case USER_PROFILE_UPDATE_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default userReducer;
  

// src/redux/reducers/userReducer.js
const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
    case 'CREATE_USER_REQUEST':
    case 'UPDATE_USER_REQUEST':
    case 'DELETE_USER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user._id !== action.payload),
      };
    case 'FETCH_USERS_FAILURE':
    case 'CREATE_USER_FAILURE':
    case 'UPDATE_USER_FAILURE':
    case 'DELETE_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
