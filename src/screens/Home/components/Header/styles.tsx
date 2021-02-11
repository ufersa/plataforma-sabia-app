import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../../../utils/colors';
import { DefaultText } from '../../../../components';

export const Wrapper = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Touch = styled.TouchableOpacity``;

const CardWrapper = styled.View``;

const CardBadge = styled.View`
  background-color: ${Colors.secondary};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: absolute;
  top: -5px;
  right: -10px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

const CardBadgeText = styled(DefaultText)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;

export const CartIcon = styled(Feather).attrs({
  name: 'shopping-cart',
})``;

export const Cart = (): JSX.Element => (
  <Touch activeOpacity={0.7}>
    <CardWrapper>
      <CardBadge>
        <CardBadgeText>1</CardBadgeText>
      </CardBadge>
      <CartIcon size={30} color="#4a4a4a" />
    </CardWrapper>
  </Touch>
);

const UserWrapper = styled.View`
  background-color: #ccc;
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

export const User = (): JSX.Element => (
  <Touch activeOpacity={0.7}>
    <UserWrapper />
  </Touch>
);
