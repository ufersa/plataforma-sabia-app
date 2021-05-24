import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp } from '@screens/.';
import Colors from '@utils/colors';

const Auth = createStackNavigator();

const AuthRoutes = (): JSX.Element => (
  <Auth.Navigator>
    <Auth.Screen
      options={{
        cardStyle: { backgroundColor: Colors.primary },
        headerShown: false,
      }}
      name="SignIn"
      component={SignIn}
    />
    <Auth.Screen
      options={{
        cardStyle: { backgroundColor: Colors.background },
        headerBackTitleVisible: false,
        headerTintColor: '#4a4a4a',
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: 'Montserrat_500Medium',
          fontWeight: '500',
          color: '#4a4a4a',
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        title: 'Cadastro',
      }}
      name="SignUp"
      component={SignUp}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
