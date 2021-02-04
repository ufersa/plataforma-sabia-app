import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, SignUp } from '../screens';
import colors from '../utils/colors';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.primary },
    }}

  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen
      options={{ headerShown: false }}
      name="SignUp"
      component={SignUp}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
