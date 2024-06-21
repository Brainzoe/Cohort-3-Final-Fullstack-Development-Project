import React from 'react';
import { useSelector } from 'react-redux';

const RiderDashboard = () => {
  const rider = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Rider Dashboard</h2>
      <p>Welcome, {rider?.username}</p>
    </div>
  );
};

export default RiderDashboard;
