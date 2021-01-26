/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import * as S from './styles';

const Notifications = (): JSX.Element => (
  <S.Wrapper>
    <StatusBar style="auto" />
    <S.Container>
      <S.Title>Notificações</S.Title>
      <List
        data={[
          {
            date: '2020-12-01T23:59:59-03:00',
            notifications: [
              {
                title: 'Pedido enviado',
                body: 'Seu pedido Bomba Subterrânea, foi recebido pelo responsável.',
                date: '2020-12-01T23:59:59-03:00',
              },
              {
                title: 'Sending Requets',
                body: 'Seu pedido Bomba Subterrânea, foi recebido pelo responsável.',
                date: '2020-12-10T23:59:59-03:00',
              },
            ],
          },
          {
            date: '2020-11-01T23:59:59-03:00',
            notifications: [
              {
                title: 'Bem vindo a plataforma Sabiá!',
                body: 'Seu cadastro está ativo, agora você pode adquirir e cadastrar tecnologias.',
                date: '2020-11-01T23:59:59-03:00',
              },
            ],
          },
        ]}
      />
    </S.Container>
  </S.Wrapper>
);

export default Notifications;
