// src/redux/actions/userAuthActions.js
import axios from 'axios';

export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';

export const USER_PROFILE_UPDATE_REQUEST = 'USER_PROFILE_UPDATE_REQUEST';
export const USER_PROFILE_UPDATE_SUCCESS = 'USER_PROFILE_UPDATE_SUCCESS';
export const USER_PROFILE_UPDATE_FAILURE = 'USER_PROFILE_UPDATE_FAILURE';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const userSignup = (userData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    const response = await axios.post('http://localhost:4000/api/signup', userData);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAILURE, payload: error.response.data.message });
  }
};

export const userLogin = (userData) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const response = await axios.post('http://localhost:4000/api/login', userData);
    localStorage.setItem('token', response.data.token); // Store token in localStorage
    console.log('Token:', token); // Log token to verify its presence and content
    console.log('Token:', token); // Log token to verify its presence and content
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILURE, payload: error.response.data.message });
  }
};

export const getUserProfile = () => async (dispatch) => {
  dispatch({ type: USER_PROFILE_REQUEST });
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log token to verify its presence and content
    console.log('Token:', token); // Log token to verify its presence and content
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get('http://localhost:4000/api/users/profile', config);
    dispatch({ type: USER_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_PROFILE_FAILURE, payload: error.response.data.message });
  }
};

export const updateUserProfile = (updatedData) => async (dispatch) => {
  dispatch({ type: USER_PROFILE_UPDATE_REQUEST });
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log token to verify its presence and content
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put('http://localhost:4000/api/users/profile', updatedData, config);
    dispatch({ type: USER_PROFILE_UPDATE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_PROFILE_UPDATE_FAILURE, payload: error.response.data.message });
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
    console.log('Token:', token); // Log token to verify its presence and content
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get('http://localhost:4000/api/users', config);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.response.data.message });
  }
};

export const createUser = (userData) => async (dispatch) => {
  dispatch({ type: CREATE_USER_REQUEST });
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log token to verify its presence and content
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post('http://localhost:4000/api/signup', userData, config);
    dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_USER_FAILURE, payload: error.response.data.message });
  }
};

export const updateUser = (id, updatedData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log token to verify its presence and content
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(`http://localhost:4000/api/users/${id}`, updatedData, config);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.response.data.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log token to verify its presence and content
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`http://localhost:4000/api/users/${id}`, config);
    dispatch({ type: DELETE_USER_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error.response.data.message });
  }
};