import React from 'react';
import { Image } from 'react-native';
import * as S from './styles';
import Logo from '../../../../../assets/logo/Logo.png';

const Header = (): JSX.Element => (
  <S.Wrapper>
    <S.Touch activeOpacity={0.7}>
      <S.CardWrapper>
        <S.CardBadge>
          <S.CardBadgeText>1</S.CardBadgeText>
        </S.CardBadge>
        <S.CartIcon size={30} color="#4a4a4a" />
      </S.CardWrapper>
    </S.Touch>
    <Image source={Logo} style={{ width: 120, height: 35 }} />
    <S.User />
  </S.Wrapper>
);

export default Header;
