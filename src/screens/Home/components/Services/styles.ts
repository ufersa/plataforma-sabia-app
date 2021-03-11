import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';

export const TechnologiesWrapper = styled.ScrollView`
  height: 377px;
  padding-left: 16px;
`;

export const Title = styled(DefaultText)`
  font-size: 18px;
  line-height: 27px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  color: #4a4a4a;
  margin-vertical: 12px;
  padding-horizontal: 16px;
`;

export const Empty = styled(DefaultText)`
  font-size: 16px;
  line-height: 24px;
  font-family: Rubik_400Regular;
  font-weight: 400;
  color: #4a4a4a;
  text-align: center;
`;
