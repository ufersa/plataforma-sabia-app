import React from 'react';
import * as S from './styles';
import { Tabs } from '../../../../components';

const Rating = () => (
  <S.Wrapper>
    <S.Title>Avaliações</S.Title>
    <S.Rate />
    <Tabs
      tabs={[
        {
          title: 'Todos',
          content: (
            <S.RateComments
              data={[
                {
                  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                  author: 'Marcos Pereira',
                },
              ]}
            />
          ),
        },
        {
          title: 'Positivos',
          content: (
            <S.RateComments
              data={[
                {
                  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                  author: 'Marcos Pereira',
                },
              ]}
            />
          ),
        },
        {
          title: 'Negativos',
          content: (
            <S.RateComments
              data={[
                {
                  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                  author: 'Marcos Pereira',
                },
              ]}
            />
          ),
        },
      ]}
    />
  </S.Wrapper>
);

export default Rating;
