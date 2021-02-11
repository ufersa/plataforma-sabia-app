import styled from 'styled-components/native';
import { DefaultText } from '../../../../../components';

export const Container = styled.View`
  height: 80px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  border-width: 2px;
  border-color: #f5f5f5;
  border-radius: 4px;
  text-align: center;
  padding-vertical: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;
