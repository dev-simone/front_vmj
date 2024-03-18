/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [selectedPage, setSelectedPage] = useState(
    sessionStorage.getItem("page")
  );

  const [authToken, setAuthToken] = useState(
    sessionStorage.getItem("authToken") || null
  );

  const logout = () => {
    setAuthToken(null);
    sessionStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, logout, selectedPage, setSelectedPage }}>
      {children}
    </AuthContext.Provider>
  );
}
