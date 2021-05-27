import React from 'react';
import { SvgXml } from 'react-native-svg';
import { IllustrationLogin } from '@utils/svgs';
import Button from '../Button';
import * as S from './styles';

interface UnauthenticatedProps {
  title: string
  onPress: () => void
}

const Unauthenticated = ({ title, onPress }: UnauthenticatedProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <SvgXml xml={IllustrationLogin} />
    </S.ImageWrapper>
    <S.Title>{title}</S.Title>
    <Button onPress={onPress}>Entrar na sua conta</Button>
  </S.Wrapper>
);

export default Unauthenticated;
