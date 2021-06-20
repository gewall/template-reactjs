import React from 'react';
import { Routes } from '../config';

import { MainContextProvider } from '../config/context';

const App = () => {
  return (
    <MainContextProvider>
      <Routes />
    </MainContextProvider>
  );
};

export default App;
