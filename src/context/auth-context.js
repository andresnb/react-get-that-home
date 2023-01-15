import { createContext, useContext, useEffect, useState } from "react";
import * as propertyServices from "../services/property-service";
import * as sessionServices from "../services/session-service";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  function login(credentials) {
    sessionServices.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    sessionServices.logout().then(() => setUser(null));
  }

  function signup(newCredentials) {
    sessionServices.signup(newCredentials).then(setUser).catch(console.log);
  }

  const value = {
    user,
    setUser,
    login,
    logout,
    signup
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
