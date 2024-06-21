// import styled from 'styled-components';
// import { Link as RouterLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

// export const Nav = styled.nav`
//   background: #333;
//   height: 110px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.2rem;
//   position: sticky;
//   top: 0;
//   z-index: 999;
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// export const NavLogo = styled(RouterLink)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: #fff;
//   }
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   margin-right: -22px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavLinks = styled(RouterLink)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid #01bf71;
//   }
// `;

// export const LogoImage = styled.img`
//   height: 110px;
//   width: auto;
// `;

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = styled.nav`
  background: #333;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(RouterLink)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(RouterLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const LogoImage = styled.img`
  height: 110px;
  width: auto;
  transition: all 0.2s ease-in-out;

  &:hover {
    height: 55px;
  }
`;
