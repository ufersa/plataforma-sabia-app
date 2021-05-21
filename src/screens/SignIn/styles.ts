import styled from 'styled-components/native';
import { DefaultText } from '@components/.';
import Colors from '@utils/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const TitleWrapper = styled.View`
  width: 100%;
`;

export const Title = styled(DefaultText)`
  width: 100%;
  color: #ffffff;
  font-family: Rubik_500Medium;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const InputWrapper = styled.View`
  margin: 0px 0px 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const ForgotPasswordText = styled(DefaultText)`
  color: #ffffff;
  font-family: Rubik_500Medium;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  padding: 0px 16px;
  margin-bottom: 40px;
`;
