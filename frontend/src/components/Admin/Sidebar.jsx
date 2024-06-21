// src/components/Sidebar.jsx

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Dashboard, People, Fastfood, DirectionsBike, BarChart } from '@mui/icons-material';

const Aside = styled.aside`
  width: ${props => (props.isopen === 'true' ? '250px' : '0')};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;

  & a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  & a:hover {
    color: #f1f1f1;
  }

  & .close-btn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Aside isopen={isOpen.toString()}>
      <a href="#" className="close-btn" onClick={toggle}>&times;</a>
      <Link to="/admin/dashboard"><Dashboard /> Dashboard</Link>
      <Link to="/admin/users"><People /> Manage Users</Link>
      <Link to="/admin/food-types"><Fastfood /> Manage Food Types</Link>
      <Link to="/admin/riders"><DirectionsBike /> Manage Riders</Link>
      <Link to="/admin/analytics"><BarChart /> View Analytics</Link>
    </Aside>
  );
};

export default Sidebar;









































































// // src/components/Admin/Sidebar.js
// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';


// const SidebarContainer = styled.aside`
//   position: fixed;
//   z-index: 999;
//   width: 250px;
//   height: 100%;
//   background: #333;
//   display: flex;
//   flex-direction: column;
//   top: 0;
//   transition: 0.3s ease-in-out;
//   left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
//   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
// `;

// const CloseIcon = styled(FaTimes)`
//   color: #fff;
// `;

// const Icon = styled.div`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.5rem;
//   background: transparent;
//   font-size: 2rem;
//   cursor: pointer;
//   outline: none;
// `;

// const SidebarWrapper = styled.div`
//   color: #fff;
//   margin-top: 2rem;
// `;

// const SidebarMenu = styled.ul`
//   display: flex;
//   flex-direction: column;
//   list-style: none;
//   padding: 0;
// `;

// const SidebarLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   padding: 16px 24px;
//   text-decoration: none;
//   color: #fff;
//   font-size: 1.5rem;
//   transition: 0.2s ease-in-out;

//   &:hover {
//     background: #575757;
//     color: #01bf71;
//     transition: 0.2s ease-in-out;
//   }
// `;

// const Sidebar = ({ isOpen, toggle }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <Icon onClick={toggle}>
//         <CloseIcon />
//       </Icon>
//       <SidebarWrapper>
//         <SidebarMenu>
//           <SidebarLink to="/admin/users" onClick={toggle}>Manage Users</SidebarLink>
//           <SidebarLink to="/admin/food-types" onClick={toggle}>Manage Food Types</SidebarLink>
//           <SidebarLink to="/admin/riders" onClick={toggle}>Manage Riders</SidebarLink>
//           <SidebarLink to="/admin/analytics" onClick={toggle}>Analytics</SidebarLink>
//         </SidebarMenu>
//       </SidebarWrapper>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;
