import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

interface CardProps {
  children: JSX.Element
};

const CardWrapper = styled(View)`
  backgroundColor: #ffffff;
  width: 100%;
  height: 100%;
  borderRadius: 8px;
  box-shadow: 0px 8px 24px #E8E8E8;
`;

const Card = ({ children }: CardProps) => (
  <CardWrapper>
    {children}
  </CardWrapper>
);

export default Card;
