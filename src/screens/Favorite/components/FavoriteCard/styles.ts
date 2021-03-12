import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';
import Colors from '../../../../utils/colors';

export const CardWrapper = styled.View`
  height: 179px;
  margin-bottom: 16px;
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
  padding: 16px 0;
`;

export const CardAction = styled.View`
  margin-top: 8px;
  align-items: center;
  justify-content: center;
`;

export const CardButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.danger};
  margin-left: 14px;
`;

export const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 190}px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #777777;
  margin-bottom: 8px;
`;

export const Amount = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${Colors.primary};
`;
