// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';

// const SidebarContainer = styled.aside`
//   position: fixed;
//   z-index: 999;
//   width: 350px;
//   height: 100%;
//   background: #333;
//   display: grid;
//   align-items: center;
//   top: 0;
//   transition: 0.3s ease-in-out;
//   right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
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
// `;

// const SidebarMenu = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(6, 80px);
//   text-align: center;

//   @media screen and (max-width: 480px) {
//     grid-template-rows: repeat(6, 60px);
//   }
// `;

// const SidebarLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.5rem;
//   text-decoration: none;
//   list-style: none;
//   transition: 0.2s ease-in-out;
//   color: #fff;
//   cursor: pointer;

//   &:hover {
//     color: #01bf71;
//     transition: 0.2s ease-in-out;
//   }
// `;

// const SideBtnWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;

// const SidebarRoute = styled(Link)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 16px 64px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   margin-bottom: 16px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
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
//           <SidebarLink to="/" onClick={toggle}>
//             Home
//           </SidebarLink>
//           <SidebarLink to="/about" onClick={toggle}>
//             About
//           </SidebarLink>
//           <SidebarLink to="/services" onClick={toggle}>
//             Services
//           </SidebarLink>
//           <SidebarLink to="/contact" onClick={toggle}>
//             Contact
//           </SidebarLink>
//         </SidebarMenu>
//         <SideBtnWrap>
//           <SidebarRoute to="/signin">Sign In</SidebarRoute>
//           <SidebarRoute to="/signup">Sign Up</SidebarRoute>
//         </SideBtnWrap>
//       </SidebarWrapper>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const SidebarContainer = styled.aside.attrs(props => ({
  as: 'aside', // Render as 'aside' HTML element
}))`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #333;
  display: grid;
  align-items: center;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(8, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 16px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          {/* Other sidebar links */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Sign In</SidebarRoute>
          <SidebarRoute to="/signup">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;



// // src/components/Sidebar.jsx

// import React from 'react';
// import styled from 'styled-components';

// const Aside = styled.aside`
//   width: ${props => (props.isopen === 'true' ? '250px' : '0')};
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #111;
//   overflow-x: hidden;
//   transition: 0.3s;
//   padding-top: 60px;

//   & a {
//     padding: 8px 8px 8px 32px;
//     text-decoration: none;
//     font-size: 25px;
//     color: #818181;
//     display: block;
//     transition: 0.3s;
//   }

//   & a:hover {
//     color: #f1f1f1;
//   }

//   & .close-btn {
//     position: absolute;
//     top: 0;
//     right: 25px;
//     font-size: 36px;
//     margin-left: 50px;
//   }
// `;

// const Sidebar = ({ isOpen, children }) => {
//   return (
//     <Aside isopen={isOpen.toString()}>
//       <a href="javascript:void(0)" className="close-btn" onClick={() => setIsOpen(false)}>&times;</a>
//       {children}
//     </Aside>
//   );
// };

// export default Sidebar;
