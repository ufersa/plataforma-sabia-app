/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import * as S from './styles';

const Requests = (): JSX.Element => (
  <S.Wrapper>
    <StatusBar style="auto" />
    <S.Container>
      <S.Title>Meus pedidos</S.Title>
      <List
        data={[
          {
            title: 'Test Very Long Title Technology',
            amount: 48900,
            status: 'send',
          },
        ]}
      />
    </S.Container>
  </S.Wrapper>
);

export default Requests;
