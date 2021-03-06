import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Colors from '@utils/colors';
import { DefaultText } from '@components/.';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';

export const Wrapper = styled.View`
  height: 55px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Touch = styled.TouchableOpacity``;

export const CardWrapper = styled.View``;

export const CardBadge = styled.View`
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

export const CardBadgeText = styled(DefaultText)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;

export const CartIcon = styled(Feather).attrs({
  name: 'shopping-cart',
})``;

export const UserWrapper = styled.View`
  background-color: #ccc;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ImageAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

export const User = (): JSX.Element => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { openModal } = useModal();

  return (
    <Touch
      activeOpacity={0.7}
      onPress={() => (user ? navigation.navigate('Menu') : openModal())}
    >
      <UserWrapper>
        {user ? (
          <ImageAvatar source={{ uri: `https://ui-avatars.com/api/?name=${user?.full_name}&size=40` }} />
        ) : (
          <Feather name="user" size={24} />
        )}
      </UserWrapper>
    </Touch>
  );
};
