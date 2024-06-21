// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AdminDashboard from './AdminDashboard';
// import DashboardContent from './DashboardContent';
// import ManageUsers from './ManageUsers'; // Import ManageUsers
// import ManageFoodTypes from './ManageFoodTypes';
// import ManageRiders from './ManageRiders';
// import Analytics from './Analytics';

// const AdminRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/admin/dashboard" element={<DashboardContent />} /> {/* Main route */}
//       <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
//       <Route path="/admin/users" element={<ManageUsers />} /> {/* Add route for ManageUsers */}
//       <Route path="/admin/food-types" element={<ManageFoodTypes />} />
//       <Route path="/admin/riders" element={<ManageRiders />} />
//       <Route path="/admin/analytics" element={<Analytics />} />
//     </Routes>
//   );
// };

// export default AdminRoutes;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import DashboardContent from './DashboardContent';
import ManageUsers from './ManageUsers';
import ManageFoodTypes from './ManageFoodTypes';
import ManageRiders from './ManageRiders';
import Analytics from './Analytics';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<DashboardContent />} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
      <Route path="/admin-users" element={<ManageUsers />} />
      <Route path="/admin/food-types" element={<ManageFoodTypes />} />
      <Route path="/admin/riders" element={<ManageRiders />} />
      <Route path="/admin/analytics" element={<Analytics />} />
    </Routes>
  );
};

export default AdminRoutes;


