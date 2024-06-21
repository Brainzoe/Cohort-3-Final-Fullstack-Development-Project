// src/components/Admin/DashboardContent.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
`;

const DashboardContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state) => state.auth.admin);
  console.log('User from Redux state:', admin); // Add this line to log user data

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  return (
    <ContentContainer>
      <h2>Admin Dashboard</h2>
      {admin ? (
        <p>Welcome, {admin.username}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </ContentContainer>
  );
};

export default DashboardContent;
