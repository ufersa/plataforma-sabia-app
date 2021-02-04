/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as S from './styles';

const SignUp = (): JSX.Element => (
  <S.Container>
    <StatusBar style="auto" />
    <S.Title>Tela de Cadastro</S.Title>
  </S.Container>
);

export default SignUp;
