import styled from 'styled-components/native';
import { DefaultText } from '../../components';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Title = styled(DefaultText)`
  font-size: 24px;
  line-height: 36px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  padding: 16px;
`;
