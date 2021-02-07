import React from 'react';

import { AuthProvider } from './useAuth';

const AppProvider = ({ children }: JSX.Element) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
