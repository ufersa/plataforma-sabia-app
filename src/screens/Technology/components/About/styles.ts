import styled from 'styled-components/native';
import { DefaultText } from '@components/.';

export const Wrapper = styled.View`
  padding-top: 32px;
  padding-bottom: 16px;
  padding-horizontal: 16px;
`;

export const Title = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 16px;
`;

export const Description = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  line-height: 24px;
`;
