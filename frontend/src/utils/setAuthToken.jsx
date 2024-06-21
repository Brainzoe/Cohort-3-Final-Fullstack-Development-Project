src/utils/setAuthToken.js
import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply the token to every request if logged in
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token); // Store the token in localStorage
  } else {
    // Delete the auth header if not logged in
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token'); // Remove the token from localStorage
  }
};

export default setAuthToken;
