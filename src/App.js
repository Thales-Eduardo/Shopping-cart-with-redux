import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './global/global';

import { Routes } from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
