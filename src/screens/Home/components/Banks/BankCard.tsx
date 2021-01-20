import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';

interface BankCardProps {
  data: {
    title: string
    background: ImageSourcePropType
  }
}

const cardWidth = (Dimensions.get('window').width / 2) - 26;

const Container = styled.View`
  width: ${cardWidth}px;
  height: 80px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const Title = styled(DefaultText)`
  width: ${cardWidth - 4}px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border-width: 2px;
  border-color: #f5f5f5;
  border-radius: 8px;
  padding-horizontal: 8px;
  padding-vertical: 22px;
`;

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
