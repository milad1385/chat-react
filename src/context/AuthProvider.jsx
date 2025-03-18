import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

function AuthProvider() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:4003/api/auth/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const result = await res.json();
        console.log(user);
        setIsLogin(true);
        setUser(result);
      }
    };

    authUser();
  }, []);
  return (
    <AuthContext.Provider value={{ isLogin, user }}></AuthContext.Provider>
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
