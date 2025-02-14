"use client";
import AuthContext from "@/context/authContext";
import { useEffect, useState } from "react";

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const userData = sessionStorage.getItem("userData");

    if (token && userData) {
      setToken(token);
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
