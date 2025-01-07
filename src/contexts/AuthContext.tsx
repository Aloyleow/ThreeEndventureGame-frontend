import { createContext } from "react";

type AuthContextType = {
  token: string | null;
  login: (verifySuccess: boolean) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

