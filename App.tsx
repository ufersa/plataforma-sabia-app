import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Root from './src';
import Colors from './src/utils/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

const App = () => (
  <NavigationContainer theme={theme}>
    <Root />
  </NavigationContainer>
);

export default App;
