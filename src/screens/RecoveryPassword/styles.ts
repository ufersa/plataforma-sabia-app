import styled from 'styled-components/native';
import { DefaultText } from '@components/.';

export const Container = styled.View`
  flex: 1;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

export const ButtonWrapper = styled.TouchableOpacity`
  padding-horizontal: 16px;
`;
