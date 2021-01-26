import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import * as S from './styles';

interface CardProps {
  children: JSX.Element[] | JSX.Element
  style?: StyleProp<ViewStyle>
}

const Card = ({ children, style }: CardProps) => (
  <S.CardWrapper style={style}>
    {children}
  </S.CardWrapper>
);

export default Card;
