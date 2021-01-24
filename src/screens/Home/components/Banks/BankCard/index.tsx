import React from 'react';
import {
  ImageSourcePropType, TouchableOpacity, ImageBackground, Dimensions,
} from 'react-native';
import { Container, Title } from './styles';

const cardWidth = (Dimensions.get('window').width / 2) - 26;
interface BankCardProps {
  data: {
    title: string
    background: ImageSourcePropType
  }
}

export default ({ data }: BankCardProps): JSX.Element => {
  const { title, background } = data;

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ImageBackground
        source={background}
        style={{
          width: cardWidth,
          height: 80,
        }}
      >
        <Container style={{ width: cardWidth }}>
          <Title style={{ width: cardWidth - 4 }}>
            {title}
          </Title>
        </Container>
      </ImageBackground>
    </TouchableOpacity>
  );
};
