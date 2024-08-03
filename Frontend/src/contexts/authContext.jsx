import React, { createContext, useState, useContext } from "react";
import { auth } from "../firebaseInit";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

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
  googleSignIn: () => { },
  googleSignOut: () => { },
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: '',
    id: '',
    refreshToken: '',
    accessToken: '',
  })


  const login = () => setIsAuthenticated(true);
  const logout = () => {
    googleSignOut()
    setIsAuthenticated(false);
    setUser({
      name: '',
      id: '',
      refreshToken: '',
      accessToken: '',
    })
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      setIsAuthenticated(true)
    });
  };

  const googleSignOut = () => {
    signOut(auth);

  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser, googleSignIn, googleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
