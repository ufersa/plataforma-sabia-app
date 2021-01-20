import React from 'react';
import { ImageSourcePropType, TouchableOpacity, ImageBackground } from 'react-native';
import { cardWidth, Container, Title } from './styles';

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
        <Container>
          <Title numberOfLines={1}>
            {title}
          </Title>
        </Container>
      </ImageBackground>
    </TouchableOpacity>
  );
};
