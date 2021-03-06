import React from 'react';
import {
  ImageSourcePropType, TouchableOpacity, ImageBackground, Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as S from './styles';

const cardWidth = (Dimensions.get('window').width / 2) - 24;
interface BankCardProps {
  data: {
    title: string
    background: ImageSourcePropType
    target: string
  },
  navigation: StackNavigationProp<any, any>
}

export default ({ navigation, data }: BankCardProps): JSX.Element => {
  const { title, background } = data;

  const navigate = () => navigation.navigate(data.target, { data });

  return (
    <TouchableOpacity
      style={{
        overflow: 'hidden',
        borderRadius: 4,
      }}
      activeOpacity={0.7}
      onPress={navigate}
    >
      <ImageBackground
        source={background}
        style={{
          width: cardWidth,
          height: 80,
        }}
      >
        <S.Container style={{ width: cardWidth }}>
          <S.Title style={{ width: cardWidth - 4 }}>
            {title}
          </S.Title>
        </S.Container>
      </ImageBackground>
    </TouchableOpacity>
  );
};
