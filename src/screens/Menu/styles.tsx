import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import DefaultText from '@components/Text';
import { useAuth } from '@hooks/useAuth';
import Colors from '@utils/colors';

interface MenuProps {
  title: string
  icon: any
  route: string
}

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const BackWrapper = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const Back = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <BackWrapper
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
    >
      <Feather size={34} color="#4a4a4a" name="chevron-left" />
    </BackWrapper>
  );
};

export const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const MenuWrapper = styled.View`
  margin-top: 16px;
  flex-direction: column;
`;

const MenuItem = styled.TouchableOpacity`
  height: 64px;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
`;

const MenuText = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-left: 8px;
`;

export const Menu = ({ title, icon, route }: MenuProps): JSX.Element => {
  const navigation = useNavigation();
  return (
    <MenuItem
      activeOpacity={0.7}
      onPress={() => navigation.navigate(route)}
    >
      <Feather size={24} color="#4a4a4a" name={icon} />
      <MenuText>{title}</MenuText>
    </MenuItem>
  );
};

const WrapperLogout = styled.View`
  padding-vertical: 24px;
  border-top-width: 1px;
  border-top-color: #e8e8e8;
`;

const LogoutItem = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const LogoutText = styled(DefaultText)`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.danger};
  font-family: Rubik_500Medium;
  font-weight: 500;
`;

export const Logout = (): JSX.Element => {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  return (
    <WrapperLogout>
      <LogoutItem
        activeOpacity={0.7}
        onPress={() => {
          signOut();
          navigation.navigate('Root');
        }}
      >
        <Feather
          name="log-out"
          size={24}
          color={Colors.danger}
          style={{ marginRight: 16 }}
        />
        <LogoutText>Sair do aplicativo</LogoutText>
      </LogoutItem>
    </WrapperLogout>
  );
};
