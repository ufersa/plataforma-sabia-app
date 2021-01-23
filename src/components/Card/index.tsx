import React from 'react';
import * as S from './styles';

interface CardProps {
  children: JSX.Element
}

const Card = ({ children }: CardProps) => (
  <S.CardWrapper>
    {children}
  </S.CardWrapper>
);

export default Card;
