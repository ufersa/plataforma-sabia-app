import React from 'react';

import { AuthProvider } from './useAuth';

const AppProvider: React.FC = ({ children }: any) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
