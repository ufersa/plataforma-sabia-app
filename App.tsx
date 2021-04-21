import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import Colors from './src/utils/colors';

import useFonts from './src/hooks/useFonts';
import AppProvider from './src/hooks';
import { ModalProvider } from './src/hooks/useModal';
import Routes from './src/routes';
import { setNavigator } from './src/utils/navigator';

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
    <NavigationContainer ref={setNavigator} theme={theme}>
      <AppProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
