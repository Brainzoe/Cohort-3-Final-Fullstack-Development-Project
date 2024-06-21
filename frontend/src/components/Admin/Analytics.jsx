// src/components/Admin/Analytics.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Analytics = () => {
  const [userCount, setUserCount] = useState(0);
  const [lastLoggedIn, setLastLoggedIn] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/analytics');
        setUserCount(response.data.userCount);
        setLastLoggedIn(response.data.lastLoggedIn);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total Users Logged In: {userCount}</p>
      <p>Last Logged In: {lastLoggedIn ? new Date(lastLoggedIn).toLocaleString() : 'N/A'}</p>
    </div>
  );
};

export default Analytics;
