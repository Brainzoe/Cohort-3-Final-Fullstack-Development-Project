import { useState } from 'react';
import { login } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Access navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      console.log('Token:', data.token); // Assuming token is returned

      // Redirect to UserDashboard on successful login
      navigate('/user-dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., display error message to user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;












// // src/components/Auth/Login.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {login, adminLogin } from '../../redux/actions/authActions';

// const Login = ({ isAdmin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login(username, password);
//       console.log('Token:', data.token); // Assuming token is returned
//       // Handle successful login, e.g., store token in local storage and redirect
//     } catch (error) {
//       console.error('Login error:', error);
//       // Handle login error, e.g., display error message to user
//     }
//   };


//   return (
//     <div>
//       <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
