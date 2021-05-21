import styled from 'styled-components/native';
import {
  DefaultText,
} from '@components/.';
import Colors from '@utils/colors';

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
  margin-bottom: 8px;
`;

export const ResetFields = styled(DefaultText)`
  font-size: 16px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: ${Colors.danger};
`;

export const Divider = styled.View`
  background-color: #E8E8E8;
  width: 100%;
  height: 1px;
  margin-vertical: 24px;
`;

export const ModalContent = styled.View`
  padding-horizontal: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ModalMessage = styled(DefaultText)`
  font-size: 16px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  color: #777777;
  margin-bottom: 12px;
`;
