/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as S from './styles';

const Technology = (): JSX.Element => (
  <S.Container>
    <StatusBar style="light" />
    <S.Title>Technology</S.Title>
  </S.Container>
);

export default Technology;
