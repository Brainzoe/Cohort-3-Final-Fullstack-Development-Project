
//redux/action/adminAuthAction
import axios from 'axios';

export const adminLoginRequest = () => {
  return {
    type: 'ADMIN_LOGIN_REQUEST',
  };
};

export const adminLoginSuccess = (token, admin) => {
  return {
    type: 'ADMIN_LOGIN_SUCCESS',
    payload: { token, admin },
  };
};

export const adminLoginFailure = (error) => {
  return {
    type: 'ADMIN_LOGIN_FAILURE',
    payload: error,
  };
};

export const adminLogin = (credentials) => {
  return async (dispatch) => {
    dispatch(adminLoginRequest());
    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', credentials);
      const { token, admin } = response.data;
      localStorage.setItem('adminToken', token);
      console.log('Token:', token); // Log token to verify its presence and content
      dispatch(adminLoginSuccess(token, admin));
    } catch (error) {
      dispatch(adminLoginFailure(error.response.data.error));
    }
  };
};

export const adminLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('adminToken');
    dispatch({ type: 'ADMIN_LOGOUT' });
  };
};
