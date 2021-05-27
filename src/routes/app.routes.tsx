import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Root from '..';
import {
  Technology,
  RequestsFeedback,
  RequestsFinish,
  RequestsDetails,
  Account,
  Menu,
  Cart,
  Contact,
  Logout,
  SignUp,
  Code,
  OrderChat,
  NotificationsView,
} from '../screens';
import Colors from '../utils/colors';
import { CartProvider } from '../hooks/useCart';
import HeaderButtons from '../components/HeaderButtons';
import IdeasBank from '../screens/Banks/Ideas';
import AnnouncementsBank from '../screens/Banks/Announcement';

const App = createStackNavigator();

const AppRoutes = (): JSX.Element => (
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
          headerShown: false,
        }}
        name="Menu"
        component={Menu}
      />
      <App.Screen
        options={{
          title: 'Meus dados',
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
        options={({ route: { params } }: any) => {
          const { data } = params;

          return ({
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#4a4a4a',
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerRight: (props) => (<HeaderButtons data={data} {...props} />),
            headerRightContainerStyle: {
              width: 60,
              paddingRight: 0,
              paddingLeft: 10,
              paddingTop: 16,
            },
          });
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
        options={{
          title: 'Fale conosco',
          headerBackTitleVisible: false,
          headerTintColor: '#4A4A4A',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="Contact"
        component={Contact}
      />
      <App.Screen
        options={{
          title: 'Chat',
          headerBackTitleVisible: false,
          headerTintColor: '#4A4A4A',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="OrderChat"
        component={OrderChat}
      />
      <App.Screen
        options={{
          title: 'Notificações',
          headerBackTitleVisible: false,
          headerTintColor: '#4A4A4A',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="NotificationsView"
        component={NotificationsView}
      />
      <App.Screen
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: '#4A4A4A',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="IdeasBank"
        component={IdeasBank}
      />
      <App.Screen
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: '#4A4A4A',
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
        name="AnnouncementsBank"
        component={AnnouncementsBank}
      />
      <App.Screen
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
      <App.Screen
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
          title: 'Confirmação de Cadastro',
        }}
        name="Code"
        component={Code}
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
