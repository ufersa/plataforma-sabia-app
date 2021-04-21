import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Button } from '..';
import { IllustrationLogin } from '../../utils/svgs';
import * as S from './styles';

interface AuthenticatedProps {
  title: string
  onPress: () => void
}

const Authenticated = ({ title, onPress }: AuthenticatedProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <SvgXml xml={IllustrationLogin} />
    </S.ImageWrapper>
    <S.Title>{title}</S.Title>
    <Button onPress={onPress}>Entrar na sua conta</Button>
  </S.Wrapper>
);

export default Authenticated;
