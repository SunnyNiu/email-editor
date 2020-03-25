import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 83px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #4285f4;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-button: 20px;
  }
`;

const Sidebar = () => {
  const jsonDataFromXml = '';
  console.log('jsonDataFromXml', jsonDataFromXml);
  return (
    <div>
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default Sidebar;
