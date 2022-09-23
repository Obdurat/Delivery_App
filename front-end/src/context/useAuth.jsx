import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={ value }>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
