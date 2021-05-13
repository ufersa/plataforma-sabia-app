import React from 'react';
import { AuthProvider } from './useAuth';

interface AppProviderProps {
  children: JSX.Element
}

const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
