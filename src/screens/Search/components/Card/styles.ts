import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Colors from '@utils/colors';
import { DefaultText } from '@components/.';

export const CardWrapper = styled.TouchableOpacity`
  height: 115px;
  margin-top: 16px;
`;

export const CardImage = styled.View`
  background-color: #f5f5f5;
  width: 110px;
  height: 83px;
  border-radius: 8px;
  margin: 16px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex-direction: column;
`;

export const CardInfo = styled.View`
  flex: 1;
  margin-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const BadgeWrapper = styled.View`
  width: ${Dimensions.get('window').width - 188}px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BadgeWrapperContent = styled.View`
  max-width: 80%;
`;

export const CardInput = styled.View`
  width: 110px;
`;

export const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 190}px;
  height: 30px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #777777;
  margin-top: 16px;
`;

export const Amount = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${Colors.primary};
`;
