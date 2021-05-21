import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Colors from '@utils/colors';
import { DefaultText } from '@components/.';

export const Wrapper = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.View`
  border-top-width: 1px;
  border-top-color: #e8e8e8;
  padding-top: 12px;
  padding-horizontal: 16px;
  margin-bottom: 10px;
`;

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 24px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 36px;
  color: #1d1d1d;
  margin-top: 36px;
`;

export const Header = styled.View`
  background-color: #f5f5f5;
  padding-horizontal: 16px;
  padding-vertical: 16px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Image = styled.Image`
  padding-horizontal: 16px;
`;

export const HeaderDetails = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Amount = styled(Title)`
  color: ${Colors.primary};
  margin-top: 8px;
  font-weight: bold;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #a5a5a5;
`;

export const DateIcon = styled(Feather)`
  margin-right: 6px;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  padding-horizontal: 16px;
`;

export const ModalBody = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #777777;
  text-align: center;
  margin-bottom: 32px;
`;
