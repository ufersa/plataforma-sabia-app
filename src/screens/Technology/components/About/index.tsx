import React from 'react';
import * as S from './styles';

interface AboutProps {
  description: string
}

const About = ({ description = '' }: AboutProps) => (
  <S.Wrapper>
    <S.Title>Descrição do produto</S.Title>
    <S.Description>
      {description}
    </S.Description>
  </S.Wrapper>
);

export default About;
