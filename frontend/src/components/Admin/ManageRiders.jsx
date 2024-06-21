// ManageRiders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageRiders = () => {
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/riders');
        setRiders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch riders:', error);
        setLoading(false);
      }
    };

    fetchRiders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Manage Riders</h2>
      <ul>
        {riders.map(rider => (
          <li key={rider._id}>
            {rider.name} - {rider.vehicle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRiders;
