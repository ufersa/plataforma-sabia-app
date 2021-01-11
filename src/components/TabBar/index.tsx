import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabContainer, Item, ItemIcon } from './styles';

const TabBar = ({ state, navigation }: BottomTabBarProps): JSX.Element => {
  const icons: string | any = {
    Home: 'home',
    Requests: 'package',
    Notifications: 'bell',
    Favorite: 'heart',
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
            canPreventDefault: true,
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
            useNativeDriver: true,
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

export default TabBar;
