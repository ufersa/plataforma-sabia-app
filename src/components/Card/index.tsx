import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components';

interface CardProps {
  children: JSX.Element[] | JSX.Element
  style?: StyleProp<ViewStyle>
};

const CardWrapper = styled(View)`
  backgroundColor: #ffffff;
  width: 100%;
  height: 100%;
  borderRadius: 8px;
  box-shadow: 0px 8px 24px #E8E8E8;
`;

const Card = ({ children, style }: CardProps) => (
  <CardWrapper style={style}>
    {children}
  </CardWrapper>
);

export default Card;
