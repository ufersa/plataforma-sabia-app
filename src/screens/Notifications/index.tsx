import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import { DefaultText } from '../../components';
import List from './components/List';

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

const Title = styled(DefaultText)`
  font-size: 24px;
  line-height: 36px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  padding-top: 16px;
  padding-horizontal: 16px;
`;

const Notifications = (): JSX.Element => (
  <Wrapper>
    <StatusBar style="auto" />
    <Container>
      <Title>Notificações</Title>
      <List
        data={[
          {
            date: '2020-12-01T23:59:59-03:00',
            notifications: [
              {
                title: 'Pedido enviado',
                body: 'Seu pedido Bomba Subterrânea, foi recebido pelo responsável.',
                date: '2020-12-01T23:59:59-03:00'
              },
              {
                title: 'Sending Requets',
                body: 'Seu pedido Bomba Subterrânea, foi recebido pelo responsável.',
                date: '2020-12-10T23:59:59-03:00'
              }
            ]
          },
          {
            date: '2020-11-01T23:59:59-03:00',
            notifications: [
              {
                title: 'Bem vindo a plataforma Sabiá!',
                body: 'Seu cadastro está ativo, agora você pode adquirir e cadastrar tecnologias.',
                date: '2020-11-01T23:59:59-03:00'
              }
            ]
          }
        ]}
      />
    </Container>
  </Wrapper>
);

export default Notifications;
