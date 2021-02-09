import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp } from '../screens';
import Colors from '../utils/colors';

const Auth = createStackNavigator();

const AuthRoutes = (): JSX.Element => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: Colors.primary },
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
