// src/components/Footer.js

// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Epicurean Delight</h3>
        <p>SAVOR EVERY MOMENT, BITE BY BITE.</p>
        <ul className="socials">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fa fa-youtube"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Epicurean Delight. All rights reserved.</p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


// const FooterContainer = styled.footer`
//   background-color: #101522;
// `;

// const FooterWrap = styled.div`
//   padding: 48px 24px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const FooterLinksContainer = styled.div`
//   display: flex;
//   justify-content: center;

//   @media screen and (max-width: 820px) {
//     padding-top: 32px;
//   }
// `;

// const FooterLinksWrapper = styled.div`
//   display: flex;

//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

// const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin: 16px;
//   text-align: left;
//   width: 160px;
//   box-sizing: border-box;
//   color: #fff;

//   @media screen and (max-width: 420px) {
//     margin: 0;
//     padding: 10px;
//     width: 100%;
//   }
// `;

// const FooterLinkTitle = styled.h2`
//   margin-bottom: 16px;
// `;

// const FooterLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.5rem;

//   &:hover {
//     color: #01bf71;
//     transition: 0.3s ease-out;
//   }
// `;

// const SocialMedia = styled.section`
//   max-width: 1000px;
//   width: 100%;
// `;

// const SocialMediaWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1100px;
//   margin: 40px auto 0 auto;

//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

// const SocialLogo = styled(Link)`
//   color: #fff;
//   justify-self: start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
//   font-weight: bold;
// `;

// const WebsiteRights = styled.small`
//   color: #fff;
//   margin-bottom: 16px;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 240px;
// `;

// const SocialIconLink = styled.a`
//   color: #fff;
//   font-size: 24px;
// `;

// export default Footer;
