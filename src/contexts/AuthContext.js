import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isDirectAccess, setIsDirectAccess] = useState(false);

  useEffect(() => {
    if (window.history.state && window.history.state.idx === 0) {
      setIsDirectAccess(true);
    }
  }, []);

  const value = {
    isDirectAccess
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
