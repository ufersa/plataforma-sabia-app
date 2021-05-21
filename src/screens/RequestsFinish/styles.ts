import styled from 'styled-components/native';
import {
  DefaultText,
} from '@components/.';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Page = styled.ScrollView`
  height: 100%;
  padding-top: 16px;
  margin-bottom: 16px;
`;

export const Title = styled(DefaultText)`
  font-size: 18px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 27px;
  margin-top: 24px;
  margin-bottom: 8px;
`;
