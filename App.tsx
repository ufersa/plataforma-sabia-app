import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Colors from './src/utils/colors';

import useFonts from './src/hooks/useFonts';
import AppProvider from './src/hooks';
import Routes from './src/routes';

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

const App = (): JSX.Element => {
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
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
