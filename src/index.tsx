import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './components';
import {
  Home, Requests, Notifications, SignIn,
} from './screens';

const Tab = createBottomTabNavigator();

const Root = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={(props) => <TabBar {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{ unmountOnBlur: true }}
      name="Requests"
      component={Requests}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
    />
    <Tab.Screen
      name="Favorite"
      component={SignIn}
    />
  </Tab.Navigator>
);

export default Root;
