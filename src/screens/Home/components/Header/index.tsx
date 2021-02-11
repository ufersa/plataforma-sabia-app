import React from 'react';
import { Image } from 'react-native';
import * as S from './styles';
import Logo from '../../../../../assets/logo/Logo.png';

const Header = (): JSX.Element => (
  <S.Wrapper>
    <S.Cart />
    <Image source={Logo} style={{ width: 120, height: 35 }} />
    <S.User />
  </S.Wrapper>
);

export default Header;
