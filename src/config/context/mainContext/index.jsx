import React, { createContext } from 'react';

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  return (
    <MainContext.Provider
      value={{
        change: 'Hello World',
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
