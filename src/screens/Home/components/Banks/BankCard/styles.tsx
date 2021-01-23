import styled from 'styled-components/native';
import { DefaultText } from '../../../../../components';

export const Container = styled.View`
  height: 80px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border-width: 2px;
  border-color: #f5f5f5;
  border-radius: 8px;
  padding: 22px 8px;
`;
