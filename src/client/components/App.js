import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Container from './Container';

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
    <Switch>
      <Route exact path="/:userId" component={Container} />
    </Switch>
  </AppContainer>
);

export default App;
