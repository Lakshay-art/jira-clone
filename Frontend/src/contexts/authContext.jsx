import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    name: '',
    id: '',
    refreshToken: '',
    accessToken: '',
  },
  login: () => { },
  logout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState({
    name: '',
    id: '',
    refreshToken: '',
    accessToken: '',
  })


  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
