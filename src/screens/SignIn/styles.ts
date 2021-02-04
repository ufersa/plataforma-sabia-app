import styled from 'styled-components/native';

import { Platform } from 'react-native';

import { Button } from '../../components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Rubik_500Medium';

  margin: 64px 0 24px;
`;

export const SignInButton = styled(Button)`
  height: 56px;
  background: #F5F5F5;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'Rubik_500Medium';
`;

export const CreateAccountButton = styled(Button)`
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
