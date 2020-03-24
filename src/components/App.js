import React from 'react';
import styled from 'styled-components';


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
  </AppContainer>
);

export default App;
