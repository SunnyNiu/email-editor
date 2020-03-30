import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  background-color: #4285f4;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

const SectionContent = styled.input`
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 30px;
    padding: 2px;
  }
`;

const Content = () => {
  return (
    <div>
      <Section>
        <SectionContent />
      </Section>
    </div>
  );
};

export default Content;
