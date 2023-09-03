import React, { createContext, useContext, useEffect, useMemo } from 'react';

import { userActions } from '@/entities/User';
import { useAppDispatch, useAppSelector } from './redux';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  id: string;
}
const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { authData } = useAppSelector(state => state.user);
  const isLoggedIn = !!authData?.id;

  const authValue = useMemo(
    () => ({ isLoggedIn, id: authData?.id }),
    [isLoggedIn, authData?.id],
  );
  useEffect(() => {
    dispatch(userActions.initialUser());
  }, [dispatch]);
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
