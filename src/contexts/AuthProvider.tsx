import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode, JwtPayload } from "jwt-decode";


type AuthProviderProps = { 
  children: React.ReactNode
};


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExist, setTokenExist] = useState(false);
  
  useEffect(() => {

    const token = localStorage.getItem("token")
    
    if(token) {
      const tokenValid = validateToken(token)
      if (tokenValid) {
        setToken(token);
      } else {
        logout()
      }
    };

    setTokenExist(true);
  },[]);

  const login = (verifySuccess: boolean) => {
    if (verifySuccess) {
      setToken(localStorage.getItem("token"));
    } else {
      return null;
    }
  };

  const validateToken = (token: string): boolean => {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      const timeNow = (Date.now() / 1000)
      
      if (decoded.exp && decoded.exp < timeNow){
        console.log(decoded.exp);
      }

      return true

    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isAuthenticated = Boolean(token)

  if(!tokenExist) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
};