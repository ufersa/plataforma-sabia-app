import styled from 'styled-components/native';
import DefaultText from '../Text';

export const Wrapper = styled.View`
  margin-horizontal: 20px;
  flex: 1;
  justify-content: center;
`;

export const ImageWrapper = styled.View`
  height: 50%;
  margin-top: -84px;
  align-items: center;
`;

export const Title = styled(DefaultText)`
  font-family: Rubik_400Regular;
  font-weight: 400;
  line-height: 27px;
  font-size: 18px;
  color: #4a4a4a;
  text-align: center;
  margin-vertical: 24px;
`;
