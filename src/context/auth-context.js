import { createContext, useContext, useEffect, useState } from "react";
import * as propertyServices from "../services/property-service";
import * as sessionServices from "../services/session-service";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [filters, setFilters] = useState({
    prices: { min: null, max: null },
    areas: { min: null, max: null },
    propertyType: [false, false], //house, apartment
    petAllowed: null,
    beds: 1,
    baths: 1,
    operationType: [false, false], //rent, sale
    search: ""
  });


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
    signup,
    filters,
    setFilters
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

