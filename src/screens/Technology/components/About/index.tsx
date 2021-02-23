/* eslint-disable max-len */
import React from 'react';
import * as S from './styles';

const About = ({ description = '' }) => (
  <S.Wrapper>
    <S.Title>Descrição do produto</S.Title>
    <S.Description>
      {description}
    </S.Description>
  </S.Wrapper>
);

export default About;
