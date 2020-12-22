import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Container } from './styles';

const TabBar = (props: BottomTabBarProps): JSX.Element => (
  <Container {...props} />
);

export default TabBar;
