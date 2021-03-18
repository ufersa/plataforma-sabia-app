import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Root from '..';
import {
  Technology,
  RequestsFeedback,
  RequestsFinish,
  RequestsDetails,
  Cart,
  Account,
  Logout,
} from '../screens';
import Colors from '../utils/colors';
import { CartProvider } from '../hooks/useCart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <CartProvider>
    <App.Navigator initialRouteName="Root">
      <App.Screen
        options={{ headerShown: false }}
        name="Root"
        component={Root}
      />
      <App.Screen
        options={{
          title: 'Meu carrinho',
          headerBackTitleVisible: false,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
        name="Cart"
        component={Cart}
      />
      <App.Screen
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: '#4a4a4a',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="Account"
        component={Account}
      />
      <App.Screen
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: '#4a4a4a',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="Technology"
        component={Technology}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="RequestsFeedback"
        component={RequestsFeedback}
      />
      <App.Screen
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
      <App.Screen
        options={{
          title: 'Detalhes do pedido',
          headerBackTitleVisible: false,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
        name="RequestsDetails"
        component={RequestsDetails}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="Logout"
        component={Logout}
      />
    </App.Navigator>
  </CartProvider>
);

export default AppRoutes;
