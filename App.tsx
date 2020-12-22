import 'react-native-gesture-handler'
import React from 'react';
import Root from './src';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Colors from './src/utils/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors
  }
};

const App = () => (
  <NavigationContainer theme={theme}>
    <Root />
  </NavigationContainer>
)

export default App;
