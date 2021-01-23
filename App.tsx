import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Root from './src';
import Colors from './src/utils/colors';
import useFonts from './src/hooks/useFonts';

SplashScreen.preventAutoHideAsync().catch(() => {
  // do nothing
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

const App = () => {
  const loadingFonts = useFonts();

  useEffect(() => {
    if (!loadingFonts) {
      SplashScreen.hideAsync().catch(() => {
        // do nothing
      });
    }
  }, [loadingFonts]);

  if (loadingFonts) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Root />
    </NavigationContainer>
  );
};

export default App;
