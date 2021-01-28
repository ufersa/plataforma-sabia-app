import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import moment from 'moment';
import Colors from './src/utils/colors';
import Root from './src';
import { Technology, RequestsFeedback, RequestsFinish } from './src/screens';
import 'moment/locale/pt-br';
import useFonts from './src/hooks/useFonts';

SplashScreen.preventAutoHideAsync().catch(() => {
  // do nothing
});

moment.locale('pt-br');

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

const Stack = createStackNavigator();

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
        <Stack.Screen
          options={{ headerShown: false }}
          name="RequestsFeedback"
          component={RequestsFeedback}
        />
        <Stack.Screen
          options={{
            title: 'Finalizar pedido',
            headerBackTitleVisible: false,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: Colors.primary,
            },
          }}
          name="RequestsFinish"
          component={RequestsFinish}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
