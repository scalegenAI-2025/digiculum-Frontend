/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode, useEffect } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  loginUser: (userData: User) => void;
  logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const loginUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
