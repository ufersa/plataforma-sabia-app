import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import { SignUp } from '../screens';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#00A688' },
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
