import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const navigation = useNavigate();

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await fetch(`http://localhost:4003/api/auth/me`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          const result = await res.json();
          setIsLogin(true);
          setUser(result);
        }
      } else {
        setIsLogin(false);
        navigation("/login");
      }
    };

    authUser();
  }, []);
  return (
    <AuthContext.Provider value={{ isLogin, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("Auth context was use outside a provider !!!");
  }

  return auth;
}

export default AuthProvider;
