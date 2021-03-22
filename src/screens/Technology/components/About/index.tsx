import React from 'react';
import * as S from './styles';

interface AboutProps {
  type: string
  description: string
}

const About = ({ type, description = '' }: AboutProps) => (
  <S.Wrapper>
    <S.Title>
      {`Descrição do ${type === 'service' ? 'serviço' : 'produto'}`}
    </S.Title>
    <S.Description>
      {description}
    </S.Description>
  </S.Wrapper>
);

export default About;
