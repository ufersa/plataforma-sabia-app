import styled from 'styled-components/native';
import { DefaultText } from '../../components';
import Colors from '../../utils/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Page = styled.View`
  flex: 1;
  padding-top: 16px;
  margin-bottom: 16px;
  justify-content: center;
`;

export const Title = styled(DefaultText)`
  width: 315px;
  font-size: 24px;
  font-family: Rubik_700Bold;
  font-weight: 700;
  line-height: 36px;
  color: ${({ error }) => (error ? Colors.danger : Colors.primary)};
  margin-bottom: 16px;
`;

export const Description = styled(DefaultText)`
  width: 315px;
  font-size: 16px;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  line-height: 24px;
  color: #4a4a4a;
`;
