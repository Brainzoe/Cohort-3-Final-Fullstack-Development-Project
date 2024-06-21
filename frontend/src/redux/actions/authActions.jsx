//.redux/action/authAction

import axios from 'axios';

export const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

export const loginSuccess = (token, user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: { token, user },
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};

export const userLogin = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post('http://localhost:4000/api/login', credentials);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      console.log('Token:', token); // Log token to verify its presence and content
      dispatch(loginSuccess(token, user));
    } catch (error) {
      dispatch(loginFailure(error.response.data.error));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };
};
