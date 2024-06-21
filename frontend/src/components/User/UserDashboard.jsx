import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
`;

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <ContentContainer>
      <h2>User Dashboard</h2>
      {user ? (
        <p>Welcome, {user.username}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </ContentContainer>
  );
};

export default UserDashboard;
