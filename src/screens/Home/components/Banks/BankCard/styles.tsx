import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { DefaultText } from '../../../../../components';

export const cardWidth = (Dimensions.get('window').width / 2) - 26;

export const Container = styled.View`
  width: ${cardWidth}px;
  height: 80px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(DefaultText)`
  width: ${cardWidth - 4}px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border-width: 2px;
  border-color: #f5f5f5;
  border-radius: 8px;
  padding-horizontal: 8px;
  padding-vertical: 22px;
`;
