import React from 'react';
import * as S from './styles';
import { Accordion } from '../../../../components';

const Details = () => (
  <S.Wrapper>
    <Accordion
      items={[
        {
          title: 'Sobre a tecnologia',
          content: <S.Technology />,
        },
        {
          title: 'Características',
          content: <S.Characteristics />,
        },
        {
          title: 'Georreferenciamento',
          content: <></>,
        },
        {
          title: 'Custos e financiamentos',
          content: <></>,
        },
        {
          title: 'Documentos',
          content: <></>,
        },
      ]}
    />
  </S.Wrapper>
);

export default Details;
