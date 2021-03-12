/* eslint-disable react/style-prop-object */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import * as S from './styles';

const Notifications = (): JSX.Element => (
  <>
    <SafeAreaView style={{ flex: 0 }} />
    <S.Wrapper>
      <StatusBar style="auto" />
      <S.Container>
        <S.Title>Notificações</S.Title>
        <List data={[]} />
      </S.Container>
    </S.Wrapper>
  </>
);

export default Notifications;
