import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../../../utils/colors';
import { DefaultText } from '../../../../../components';

export const CardWrapper = styled.View`
  width: 248px;
  height: 381px;
`;

export const CardContainer = styled.View`
  padding: 16px;
`;

export const CardImage = styled.View`
  background-color: #f5f5f5;
  width: 216px;
  height: 216px;
  border-radius: 8px;
`;

export const Title = styled(DefaultText)`
  height: 55px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin-top: 16px;
`;

export const StatusWrapper = styled.View`
  margin-top: 8px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Status = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: ${Colors.primary};
`;

export const StatusIcon = styled(Feather)`
  margin-right: 6px;
`;

export const DateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Date = styled(DefaultText)`
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

export const Actions = styled.View`
  width: 100%;
  height: 26px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 16px;
  z-index: 1;
`;

export const LabelWrapper = styled.View`
  background-color: #ccede7;
  width: auto;
  height: 26px;
  padding: 4px 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const LabelText = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${Colors.primary};
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-right: 18px;
`;

export const FavoriteIcon = styled(FontAwesome5)``;
