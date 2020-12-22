import React, { useEffect, useRef, createRef } from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

const TabContainer = styled(View)`
  backgroundColor: #ffffff;
  width: 100%;
  height: 80px;
  flexDirection: row;
  justifyContent: space-around;
`;

const Item = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

const ItemIcon = styled(Feather)``;

export const Container = ({ state, navigation }: BottomTabBarProps): JSX.Element => {
  const icons: string | any = {
    Home: 'home',
    Requests: 'package',
    Notifications: 'bell',
    Favorite: 'heart'
  };

  return (
    <TabContainer>
      {state.routes.map((route, idx) => {
        const animateTop = useRef(new Animated.Value(0)).current;
        const routeName: string = route.name;
        const isFocused = state.index === idx;

        const onPress = (): void => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(routeName);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        useEffect(() => {
          Animated.timing(animateTop, {
            toValue: isFocused ? -4 : 0,
            duration: 100,
            useNativeDriver: true
          }).start();
        }, [isFocused]);

        return (
          <Item
            key={`tab_${idx}`}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Animated.View
              style={{ transform: [{ translateY: animateTop }] }}
            >
              <ItemIcon
                name={icons[routeName]}
                size={20}
                color={isFocused ? '#00a688' : '#a5a5a5'}
              />
            </Animated.View>
          </Item>
        );
      })}
    </TabContainer>
  );
};
