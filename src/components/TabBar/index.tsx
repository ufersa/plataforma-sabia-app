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
          <Animated.View
            style={{ transform: [{ translateY: animateTop }] }}
            key={`tab_${idx}`}
          >
            <Item
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
            >
              <ItemIcon
                name={icons[routeName]}
                size={20}
                isFocused={isFocused}
              />
            </Item>
          </Animated.View>
        );
      })}
    </TabContainer>
  );
};

export default TabBar;
