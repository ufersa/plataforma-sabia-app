/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as S from './styles';

const Favorite = (): JSX.Element => (
  <S.Container>
    <StatusBar style="auto" />
    <S.Title>Favorite</S.Title>
  </S.Container>
);

export default Favorite;
