import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 300px;
  width: 300px;
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

const Content = () => (
  <div>
    <Section />
  </div>
);

export default Content;
