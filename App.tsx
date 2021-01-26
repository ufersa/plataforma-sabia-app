import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './src/utils/colors';
import Root from './src';
import { Technology } from './src/screens';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Root"
        component={Root}
      />
      <Stack.Screen
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: '#4A4A4A',
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
        }}
        name="Technology"
        component={Technology}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
