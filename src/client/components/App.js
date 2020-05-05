import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Container from './Container';
import Preview from './Preview';

const AppContainer = styled.div`
  width: fit-content;
  margin: 4px auto;
  font-family: monospace;
  * + label {
    margin-left: 2px;
    margin-top: 8px;
    margin-bottom: 2px;
    display: block;
  }
`;

const App = () => (
  <AppContainer>
    <Nav />
    <Container />
    <Preview />
  </AppContainer>
);

export default App;
