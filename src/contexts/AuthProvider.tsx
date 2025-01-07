import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


type AuthProviderProps = { 
  children: React.ReactNode
};


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExist, setTokenExist] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token) {
      setToken(token)
    }
    setTokenExist(true)
  },[]);

  const login = (verifySuccess: boolean) => {
    if (verifySuccess) {
      setToken(localStorage.getItem("token"));
    } else {
      return null
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isAuthenticated = Boolean(token)

  if(!tokenExist) {
    return null
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}