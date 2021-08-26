import React, { useEffect } from 'react';
import * as Analytics from 'expo-firebase-analytics';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, NavigationState } from '@react-navigation/native';
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

const getActiveRouteState = (route: NavigationState): NavigationState => {
  if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
    return route;
  }
  const childActiveRoute = route.routes[route.index] as NavigationState;
  return getActiveRouteState(childActiveRoute);
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

  useEffect(() => {
    Analytics.setDebugModeEnabled(true);
  }, []);

  if (loadingFonts) {
    return null;
  }

  return (
    <NavigationContainer
      ref={setNavigator}
      theme={theme}
      onStateChange={(state: NavigationState) => {
        const currentScreen = getActiveRouteState(state);
        let screenName = currentScreen?.name;

        if (currentScreen?.name === 'Root') {
          screenName = currentScreen?.state.routeNames[currentScreen?.state.index];
        }

        Analytics.setCurrentScreen(screenName);
      }}
    >
      <AppProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
