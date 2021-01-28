import styled from 'styled-components/native';
import DefaultText from '../Text';

export const BadgeWrapper = styled.View`
  background-color: #e8e8e8;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  text-align: center;
  padding: 0 8px;
`;

export const Text = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #777777;
`;
