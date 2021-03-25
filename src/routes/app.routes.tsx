import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, Share } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../components';
import Root from '..';
import {
  Technology,
  RequestsFeedback,
  RequestsFinish,
  RequestsDetails,
  Account,
  Cart,
  Logout,
} from '../screens';
import Colors from '../utils/colors';
import { CartProvider } from '../hooks/useCart';

const App = createStackNavigator();

const ButtonsHeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
`;

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
        options={({ route: { params } }: any) => ({
          title: '',
          headerBackTitleVisible: false,
          headerTintColor: '#4a4a4a',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerRight: () => (
            <ButtonsHeaderWrapper>
              <Button
                size="md"
                variant="orange-light"
                onPress={() => {}}
              >
                <Feather name="heart" size={16} />
              </Button>
              <Button
                size="md"
                variant="info-light"
                onPress={
                  async () => {
                    await Share.share({
                      message: Platform.OS === 'ios' ? params.data.title : params.data.description,
                      url: `http://plataformasabia.com/t/${params.data.slug}`,
                      title: params.data.title,
                    });
                  }
                }
              >
                <Feather name="share-2" size={16} />
              </Button>
            </ButtonsHeaderWrapper>
          ),
          headerRightContainerStyle: {
            height: 40,
            justifyContent: 'flex-end',
            paddingRight: 8,
          },
        })}
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
