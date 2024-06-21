// src/components/Header.js

import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Epicurean Delight</h1>
        <p>Your one-stop restaurant for delicious meals..</p>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: #f8f9fa;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeaderContent = styled.div`
  h1 {
    font-size: 3rem;
    color: #333;
  }

  p {
    font-size: 1.5rem;
    color: #555;
  }
`;

export default Header;
