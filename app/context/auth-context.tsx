import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { default as cookie } from "../lib/token";

export interface User {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  image: string | null;
  email_verified: boolean;
  role: "regular" | "admin";
}

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  token: string | null;
  setToken: (token: string | null, expiry?: Date) => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const TOKEN_KEY = "contreebute_token";
export const USER_KEY = "contreebute_user";

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  persist?: boolean;
}> = ({ children, persist = true }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [user, setUserState] = useState<User | null>(() => {
    if (!persist) return null;
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const storedToken = cookie.get(TOKEN_KEY);
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  const setToken = (newToken: string | null, expiry?: Date) => {
    if (newToken && expiry) {
      cookie.set(TOKEN_KEY, newToken, expiry);
      setTokenState(newToken);
    } else {
      cookie.remove(TOKEN_KEY);
      setTokenState(null);
    }
  };

  useEffect(() => {
    if (!persist) return;
    try {
      if (user == null) localStorage.removeItem(USER_KEY);
      else localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch {
      // ignore
    }
  }, [user, persist]);

  const setUser = (u: User | null) => {
    setUserState(u);
  };

  const logout = () => {
    cookie.remove(TOKEN_KEY);
    if (persist) {
      try {
        localStorage.removeItem(USER_KEY);
      } catch {}
    }
    window.location.href = "/";
  };

  const isAuthenticated = !!user && !!token;

  const value = useMemo(
    () => ({ user, setUser, logout, token, setToken, isAuthenticated }),
    [, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// hook for components
export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
