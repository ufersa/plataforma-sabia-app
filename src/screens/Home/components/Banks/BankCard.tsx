import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';
import { DefaultText } from '../../../../components';

interface BankCardProps {
  data: {
    title: string
    background: ImageSourcePropType
  }
  navigation: StackNavigationProp<any, any>
};

const cardWidth = (Dimensions.get('window').width / 2) - 26;

const Container = styled(View)`
  width: ${cardWidth}px;
  height: 80px;
  borderRadius: 8px;
  alignItems: center;
  justifyContent: center;
`;

const Title = styled(DefaultText)`
  width: ${cardWidth - 4}px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 18px;
  lineHeight: 27px;
  color: #ffffff;
  borderWidth: 2px;
  borderColor: #f5f5f5;
  borderRadius: 8px;
  paddingHorizontal: 8px;
  paddingVertical: 22px;
`;

export default ({ navigation, data }: BankCardProps): JSX.Element => {
  const { title, background } = data;

  return (
    <TouchableOpacity activeOpacity={.7}>
      <ImageBackground
        source={background}
        style={{
          width: cardWidth,
          height: 80
        }}
      >
        <Container>
          <Title numberOfLines={1}>
            {title}
          </Title>
        </Container>
      </ImageBackground>
    </TouchableOpacity>
  );
}
