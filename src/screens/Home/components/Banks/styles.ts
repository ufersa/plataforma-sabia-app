import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';

export const BanksWrapper = styled.View`
  padding: 16px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #4a4a4a;
  padding-horizontal: 16px;
`;
