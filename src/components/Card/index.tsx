import React from 'react';
import styled from 'styled-components/native';

interface CardProps {
  children: JSX.Element
}

const CardWrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0px 8px 24px #E8E8E8;
`;

const Card = ({ children }: CardProps) => (
  <CardWrapper>
    {children}
  </CardWrapper>
);

export default Card;
