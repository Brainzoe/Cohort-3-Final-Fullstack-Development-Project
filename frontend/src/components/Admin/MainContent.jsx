// src/components/Admin/MainContent.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f1f1f1;
`;

const MainContent = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MainContent;
