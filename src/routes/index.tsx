import React from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import colors from '../utils/colors';
// import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
// import { useAuth } from '../hooks/useAuth';

const Routes: React.FC = () => {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color={colors.border} />
  //     </View>
  //   );
  // }

  // return user ? <AppRoutes /> : <AuthRoutes />;
  return <AppRoutes />;
};

export default Routes;
