import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312c38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    {/* <Auth.Screen name="SignUp" component={SignUp} /> */}
  </Auth.Navigator>
);

export default AuthRoutes;
