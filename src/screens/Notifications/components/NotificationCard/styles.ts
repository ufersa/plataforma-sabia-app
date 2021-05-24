import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { DefaultText } from '@components/.';

export const CardWrapper = styled.View``;

export const HeaderTitle = styled(DefaultText)`
  margin-top: 24px;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 21px;
  font-size: 14px;
  color: #777777;
  padding-horizontal: 16px;
`;

export const ItemsWrapper = styled.View``;

export const NotificationWrapper = styled.TouchableOpacity`
  height: 92px;
  border-bottom-color: #e8e8e8;
  border-bottom-width: 1px;
  padding: 12px 16px;
`;

export const NotificationTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 100}px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: #4a4a4a;
  margin-bottom: 8px;
`;

export const Date = styled(DefaultText)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
  line-height: 18px;
  font-size: 12px;
  color: #777777;
`;

export const NotificationDescription = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 100}px;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  line-height: 18px;
  font-size: 12px;
  color: #4a4a4a;
`;
