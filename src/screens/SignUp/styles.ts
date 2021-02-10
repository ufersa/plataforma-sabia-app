import styled from 'styled-components/native';
import { DefaultText } from '../../components';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-horizontal: 16px;
`;

export const TitleWrapper = styled.View`
  width: 100%;
`;

export const Title = styled(DefaultText)`
  font-size: 18px;
  line-height: 27px;
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  padding: 0px 16px;
  margin-bottom: 20px;
`;
