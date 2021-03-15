/* eslint-disable react/style-prop-object */
import React from 'react';
import { Platform, StatusBar as StatusBarHelper, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import * as S from './styles';

const Requests = (): JSX.Element => (
  <SafeAreaView
    style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBarHelper.currentHeight : 0,
    }}
  >
    <S.Wrapper>
      <StatusBar style="auto" />
      <S.Container>
        <S.Title>Meus pedidos</S.Title>
        <List data={[]} />
      </S.Container>
    </S.Wrapper>
  </SafeAreaView>
);

export default Requests;
