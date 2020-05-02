import { hot } from 'react-hot-loader';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import '@csstools/normalize.css';
import { COLORS } from './constants';

const Main = styled.div`
  background: ${COLORS.greyPastel};
  height: 100vh;
  padding: 50px;
`;

const Box = styled.div`
  max-width: 400px;
  margin: auto
`;

const App = () => (
  <Main className="App">
    <Box>
      <h2>Home Challenge</h2>
    </Box>
  </Main>
);

export default hot(module)(App);
