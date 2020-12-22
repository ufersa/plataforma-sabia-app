import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './components'
import { Home, Requests, Notifications, Favorite } from './screens';

const Tab = createBottomTabNavigator();

const Root = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => <TabBar {...props} />}  
  >
    <Tab.Screen
      name="Home"
      component={Home}
    />
    <Tab.Screen
      name="Requests"
      component={Requests}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
    />
  </Tab.Navigator>
);

export default Root;
