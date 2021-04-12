/* eslint-disable react/style-prop-object */
import React from 'react';
import { Platform, StatusBar as StatusBarHelper, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import User from '../../components/User';

import * as S from './styles';

const Menu = (): JSX.Element => (
  <SafeAreaView
    style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBarHelper.currentHeight : 0,
    }}
  >
    <StatusBar style="dark" />
    <S.UserWrapper>
      <S.Back />
      <User />
    </S.UserWrapper>
    <S.Wrapper>
      <S.MenuWrapper>
        <S.Menu title="Meus dados" icon="user" route="Account" />
        <S.Menu title="Fale conosco" icon="help-circle" route="Contact" />
      </S.MenuWrapper>
      <S.Logout />
    </S.Wrapper>
  </SafeAreaView>
);

export default Menu;
