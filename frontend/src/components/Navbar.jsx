// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import styled from 'styled-components';
// // import Logo from '../assets/images/logo4.png';
// // import { FaBars } from 'react-icons/fa';

// // const Nav = styled.nav`
// //   background: #343a40;
// //   height: 80px;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 0 1rem;
// // `;

// // const NavbarContainer = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   height: 80px;
// //   z-index: 1;
// //   width: 100%;
// //   padding: 0 24px;
// //   max-width: 1100px;
// // `;

// // const NavLogo = styled(Link)`
// //   color: #fff;
// //   cursor: pointer;
// //   display: flex;
// //   align-items: center;
// //   margin-left: 24px;
// //   font-weight: bold;
// //   font-size: 24px;
// //   text-decoration: none;
// // `;

// // const LogoImage = styled.img`
// //   height: 60px; /* Adjust the size of the logo */
// //   width: auto;
// // `;

// // const MobileIcon = styled.div`
// //   display: none;

// //   @media screen and (max-width: 768px) {
// //     display: block;
// //     position: absolute;
// //     top: 0;
// //     right: 0;
// //     transform: translate(-100%, 60%);
// //     font-size: 1.8rem;
// //     cursor: pointer;
// //     color: #fff;
// //   }
// // `;

// // const NavMenu = styled.ul`
// //   display: flex;
// //   align-items: center;
// //   list-style: none;
// //   text-align: center;
// //   margin-right: -22px;

// //   @media screen and (max-width: 768px) {
// //     display: none;
// //   }
// // `;

// // const NavItem = styled.li`
// //   height: 80px;
// // `;

// // const NavLinks = styled(Link)`
// //   color: #fff;
// //   display: flex;
// //   align-items: center;
// //   text-decoration: none;
// //   padding: 0 1rem;
// //   height: 100%;
// //   cursor: pointer;

// //   &.active {
// //     border-bottom: 3px solid #01bf71;
// //   }
// // `;

// // const NavBtn = styled.nav`
// //   display: flex;
// //   align-items: center;

// //   @media screen and (max-width: 768px) {
// //     display: none;
// //   }
// // `;

// // const NavBtnLink = styled(Link)`
// //   border-radius: 50px;
// //   background: #01bf71;
// //   white-space: nowrap;
// //   padding: 10px 22px;
// //   color: #010606;
// //   font-size: 16px;
// //   outline: none;
// //   border: none;
// //   cursor: pointer;
// //   transition: all 0.2s ease-in-out;
// //   text-decoration: none;
// //   margin-left: 24px;

// //   &:hover {
// //     transition: all 0.2s ease-in-out;
// //     background: #fff;
// //     color: #010606;
// //   }
// // `;

// // const SearchbarContainer = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   margin-right: 2rem;
// // `;

// // const SearchInput = styled.input`
// //   padding: 10px;
// //   border: none;
// //   border-radius: 50px;
// //   margin-right: 10px;
// //   outline: none;
// // `;

// // const Navbar = ({ toggle }) => {
// //   return (
// //     <Nav>
// //       <NavbarContainer>
// //         <NavLogo to="/">
// //           <LogoImage src={Logo} alt="Logo" />
// //         </NavLogo>
// //         <MobileIcon onClick={toggle}>
// //           <FaBars />
// //         </MobileIcon>
// //         <NavMenu>
// //           <NavItem>
// //             <NavLinks to="/">Home</NavLinks>
// //           </NavItem>
// //           <NavItem>
// //             <NavLinks to="/about">About</NavLinks>
// //           </NavItem>
// //           <NavItem>
// //             <NavLinks to="/services">Services</NavLinks>
// //           </NavItem>
// //           <NavItem>
// //             <NavLinks to="/contact">Contact</NavLinks>
// //           </NavItem>
// //         </NavMenu>
// //         <NavBtn>
// //           <NavBtnLink to="/admin/login">Sign In</NavBtnLink>
// //           <NavBtnLink to="/admin/register">Sign Up</NavBtnLink>
// //         </NavBtn>
// //       </NavbarContainer>
// //     </Nav>
// //   );
// // };

// // export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import Logo from '../assets/images/logo4.png';
// import styled from 'styled-components';

// const Nav = styled.nav`
//   background: #000;
//   height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.2rem;
// `;

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// const NavLogo = styled(Link)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
// `;

// const LogoImage = styled.img`
//   width: 50px;
// `;

// const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 960px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;

//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

// const NavItem = styled.li`
//   height: 80px;
// `;

// const NavLinks = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &:hover {
//     border-bottom: 3px solid #01bf71;
//     transition: all 0.2s ease-in-out;
//   }
// `;

// const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

// const NavBtnLink = styled(Link)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;

// const Navbar = ({ toggle }) => {
//   return (
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to="/">
//           <LogoImage src={Logo} alt="Logo" />
//         </NavLogo>
//         <MobileIcon onClick={toggle}>
//           <FaBars />
//         </MobileIcon>
//         <NavMenu>
//           <NavItem>
//             <NavLinks to="/">Home</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/about">About</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/services">Services</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/contact">Contact</NavLinks>
//           </NavItem>
//           {/* Additional Links */}
//           <NavItem>
//             <NavLinks to="/user/dashboard">User Dashboard</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/user/profile">User Profile</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/admin/dashboard">Admin Dashboard</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/admin/users">Manage Users</NavLinks>
//           </NavItem>
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to="/admin/login">Sign In</NavBtnLink>
//           <NavBtnLink to="/admin/register">Sign Up</NavBtnLink>
//         </NavBtn>
//       </NavbarContainer>
//     </Nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '/assets/images/logo4.png';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <LogoImage src={Logo} alt="Logo" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
          {/* Additional Links */}
          <NavItem>
            <NavLinks to="/login">User Sign</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="">User Profile</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/admin/dashboard">Admin Dashboard</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/admin/users">Manage Users</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/admin/login">Sign In</NavBtnLink>
          <NavBtnLink to="/admin/register">Sign Up</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

