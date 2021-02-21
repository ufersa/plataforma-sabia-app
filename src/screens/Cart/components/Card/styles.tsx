import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';
import Colors from '../../../../utils/colors';

export const CardWrapper = styled.View`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
  margin-vertical: 16px;
  padding-bottom: 16px;
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  height: 83px;
  margin-right: 16px;
`;

export const CardBadge = styled.View`
  background-color: ${Colors.secondary};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: -10px;
  right: -10px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: #ffffff;
`;

export const CardBadgeText = styled(DefaultText)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;

export const CardDetails = styled.View`
  flex: 1;
`;

export const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  color: #777777;
  margin-bottom: 4px;
`;

export const Value = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.primary};
  margin-bottom: 4px;
`;

export const Author = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #a5a5a5;
`;

export const EditIcon = styled.View`
  align-items: flex-end;
`;
