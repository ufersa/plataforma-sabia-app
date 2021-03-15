import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../../utils/colors';
import { DefaultText } from '../../../../components';

export const CardWrapper = styled.View`
  width: 248px;
  height: 345px;
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

export const AmountWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: 8px;
`;

export const Amount = styled(DefaultText)`
  font-family: ${({ bold }) => (bold ? 'Rubik_500Medium' : 'Rubik_400Regular')};
  font-weight: ${({ bold }) => (bold ? '500' : '400')};
  font-size: ${({ bold }) => (bold ? '16px' : '12px')};
  line-height: ${({ bold }) => (bold ? '21px' : '18px')};;
  text-align: center;
  color: ${Colors.primary};

  ${({ bold }) => bold && `
    margin-horizontal: 3px;
  `};
`;

export const Actions = styled.View`
  width: 100%;
  height: 26px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

export const FavoriteIcon = styled(FontAwesome5)``;
