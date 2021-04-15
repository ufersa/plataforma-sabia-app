import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './components';
import {
  Home, Search, Requests, Notifications, Favorite,
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
      name="Search"
      component={Search}
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
      options={{ unmountOnBlur: true }}
      name="Favorite"
      component={Favorite}
    />
  </Tab.Navigator>
);

export default Root;
