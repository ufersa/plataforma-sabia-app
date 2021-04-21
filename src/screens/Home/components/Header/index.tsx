import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import * as S from './styles';
import Logo from '../../../../../assets/logo/Logo.png';
import { useAuth } from '../../../../hooks/useAuth';
import { useCart } from '../../../../hooks/useCart';
import { useModal } from '../../../../hooks/useModal';

const Header = (): JSX.Element => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { items } = useCart();
  const { openModal } = useModal();

  return (
    <S.Wrapper>
      <S.Touch
        onPress={() => (user ? navigation.navigate('Cart') : openModal())}
        activeOpacity={0.7}
      >
        <S.CardWrapper>
          {items.length > 0 && (
            <S.CardBadge>
              <S.CardBadgeText>
                {items.length}
              </S.CardBadgeText>
            </S.CardBadge>
          )}
          <S.CartIcon size={30} color="#4a4a4a" />
        </S.CardWrapper>
      </S.Touch>
      <Image source={Logo} style={{ width: 120, height: 35 }} />
      <S.User />
    </S.Wrapper>
  );
};

export default Header;
