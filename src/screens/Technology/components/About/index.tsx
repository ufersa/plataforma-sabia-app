import React from 'react';
import * as S from './styles';

interface AboutProps {
  type: string
  description: string
}

const About = ({ type, description = '' }: AboutProps) => (
  <S.Wrapper>
    <S.Title>
      {`Descrição ${type === 'service' ? 'do Serviço' : 'da Tecnologia'}`}
    </S.Title>
    <S.Description>
      {description}
    </S.Description>
  </S.Wrapper>
);

export default About;
