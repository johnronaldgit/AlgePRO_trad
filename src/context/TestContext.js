import React, { createContext, useState, useContext } from 'react';

const TestContext = createContext();

export const useTestContext = () => {
  return useContext(TestContext);
};

export const TestProvider = ({ children }) => {
  const [isTestActive, setIsTestActive] = useState(false);

  return (
    <TestContext.Provider value={{ isTestActive, setIsTestActive }}>
      {children}
    </TestContext.Provider>
  );
};
