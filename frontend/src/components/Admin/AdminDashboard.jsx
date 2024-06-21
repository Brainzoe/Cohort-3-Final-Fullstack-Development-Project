// // // src/components/Admin/AdminDashboard.js

// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { logout } from '../../redux/actions/authActions';
// // import { useNavigate } from 'react-router-dom';

// // const AdminDashboard = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const admin = useSelector((state) => state.auth.user);

// //   const handleLogout = () => {
// //     dispatch(logout());
// //     navigate('/admin/login');
// //   };

// //   return (
// //     <div>
// //       <h2>Admin Dashboard</h2>
// //       {admin ? (
// //         <p>Welcome, {admin.username}</p>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //       <button onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// // src/components/Admin/AdminDashboard.js

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../redux/actions/authActions';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth); // Fetch user from Redux state
//   console.log('User from Redux state:', user); // Add this line to log user data

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/admin/login');
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       {user ? (
//         <p>Welcome, {user.username}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent'; // Import MainContent
// import DashboardContent from './DashboardContent'; // Import DashboardContent

// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const AdminDashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <DashboardContainer>
//       <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
//       <MainContent>
//         <DashboardContent /> {/* Render DashboardContent */}
//         <h2>Admin Dashboard</h2>
//         <p>Welcome to the admin dashboard! Here, you can manage various aspects of your application.</p>
//         <div>
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/admin/users">Manage Users</a></li>
//             <li><a href="/admin/food-types">Manage Food Types</a></li>
//             <li><a href="/admin/riders">Manage Riders</a></li>
//             <li><a href="/admin/analytics">View Analytics</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3>Recent Activities</h3>
//           {/* Add recent activities or any other relevant information */}
//           <p>No recent activities to display.</p>
//         </div>
//       </MainContent>
//     </DashboardContainer>
//   );
// };

// export default AdminDashboard;
// src/components/Admin/AdminDashboard.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent'; // Import MainContent
// import DashboardContent from './DashboardContent'; // Import DashboardContent


// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const AdminDashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <DashboardContainer>
//       <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
//       <MainContent>
//       <DashboardContent /> {/* Render DashboardContent */}
//         <h2>Admin Dashboard</h2>
//         <p>Welcome to the admin dashboard! Here, you can manage various aspects of your application.</p>
//         <div>
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/admin/users">Manage Users</a></li>
//             <li><a href="/admin/food-types">Manage Food Types</a></li>
//             <li><a href="/admin/riders">Manage Riders</a></li>
//             <li><a href="/admin/analytics">View Analytics</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3>Recent Activities</h3>
//           {/* Add recent activities or any other relevant information */}
//           <p>No recent activities to display.</p>
//         </div>
//       </MainContent>
//     </DashboardContainer>
//   );
// };

// export default AdminDashboard;


// src/components/Admin/AdminDashboard.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AdminRoutes from './AdminRoutes';
import MainContent from './MainContent';
import { Dashboard, People, Fastfood, DirectionsBike, BarChart } from '@mui/icons-material';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f6f8;
`;

const SidebarToggle = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #0056b3;
  }
`;

const MainContentStyled = styled(MainContent)`
  margin-left: ${props => (props.isOpen ? '250px' : '0')};
  transition: margin-left 0.3s;
  padding: 20px;
`;

const WelcomeMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const QuickLinks = styled.div`
  margin-top: 20px;
`;

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f1f1f1;
  }

  & svg {
    margin-right: 10px;
  }
`;

const RecentActivities = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { admin } = useSelector((state) => state.auth);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardContainer>
      <SidebarToggle onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
      </SidebarToggle>
      <Sidebar isOpen={isSidebarOpen} />
      <MainContentStyled isOpen={isSidebarOpen}>
        <AdminRoutes />
        <h2>Admin Dashboard</h2>
        {admin && <WelcomeMessage>Welcome, {admin.username}</WelcomeMessage>}
        <QuickLinks>
          <h3>Quick Links</h3>
          <ul>
            <li><LinkItem to="/admin-users"><People />Manage Users</LinkItem></li>
            <li><LinkItem to="/admin/food-types"><Fastfood />Manage Food Types</LinkItem></li>
            <li><LinkItem to="/admin/riders"><DirectionsBike />Manage Riders</LinkItem></li>
            <li><LinkItem to="/admin/analytics"><BarChart />View Analytics</LinkItem></li>
          </ul>
        </QuickLinks>
        <RecentActivities>
          <h3>Recent Activities</h3>
          <p>No recent activities to display.</p>
        </RecentActivities>
      </MainContentStyled>
    </DashboardContainer>
  );
};

export default AdminDashboard;

