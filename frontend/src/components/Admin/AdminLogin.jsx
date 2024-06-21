// src/components/Admin/AdminLogin.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { adminLoginSuccess, adminLoginFailure } from '../../redux/actions/adminAuthAction'; // Import loginSuccess and loginFailure

// const AdminLogin = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({
//         username: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setCredentials({
//             ...credentials,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:4000/api/admin/login', credentials);
//             if (response && response.data) {
//                 const { token, admin } = response.data;
//                 localStorage.setItem('token', token);
                
//                 dispatch(adminLoginSuccess(token, admin));
//                 navigate('/admin/dashboard');
//             } else {
//                 console.error('Empty response or missing data');
//                 // Handle empty response or missing data scenario
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
//             if (error.response) {
//                 dispatch(adminLoginFailure(error.response.data.error));
//             } else {
//                 // Handle network error or other unexpected errors
//                 console.error('Network error:', error.message);
//             }
//         }
//     };


//     return (
//         <div>
//             <h2>Admin Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} autoComplete="current-password" /> {/* Add autoComplete attribute */}
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default AdminLogin;


// src/components/Admin/AdminLogin.js
// src/components/Admin/AdminLogin.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLoginSuccess, adminLoginFailure } from '../../redux/actions/adminAuthAction';
import './AdminLogin.css';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', credentials);
      if (response && response.data) {
        const { token, admin } = response.data;
        localStorage.setItem('token', token);
        dispatch(adminLoginSuccess(token, admin));
        navigate('/admin/dashboard');
      } else {
        console.error('Empty response or missing data');
      }
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response) {
        dispatch(adminLoginFailure(error.response.data.error));
      } else {
        console.error('Network error:', error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
