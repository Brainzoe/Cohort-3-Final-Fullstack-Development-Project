import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
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
      await axios.post('http://localhost:4000/api/signup', credentials);
      navigate('/login');  // Navigate to login page upon successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup failure
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default UserSignup;
