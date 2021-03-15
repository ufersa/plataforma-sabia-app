import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { DefaultText } from '../../../../components';
import Colors from '../../../../utils/colors';

export const Wrapper = styled.View`
  border-top-width: 1px;
  border-top-color: #e8e8e8;
  margin-horizontal: 16px;
`;

export const Subtitle = styled(DefaultText)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-vertical: 8px;
`;

export const Description = styled(DefaultText)`
  color: #777777;
  font-family: Montserrat_500Medium;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  text-align: justify;
`;

export const DetailsText = styled(Description)`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 8px;
  text-align: justify;
`;

export const Highlight = styled(DetailsText)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
`;

export const CostSection = styled(Subtitle)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  line-height: 21px;
  margin-vertical: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

export const Col1 = styled.View`
  flex: 1;
`;

export const Col2 = styled.View`
  padding-left: 5px;
`;

export const Col3 = styled(Col2)`
  min-width: 80px;
  justify-content: space-between;
`;

export const ColTextBold = styled.Text`
  flex: 1;
  font-family: Montserrat_700Bold;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
`;

export const ColText = styled.Text`
  font-family: Montserrat_400Regular;
  color: #4a4a4a;
`;

export const ColTextLight = styled(ColText)`
  color: #a5a5a5;
`;

export const CostItem = styled.View`
`;

export const Field = styled.View`
`;

export const SubTotal = styled.View`
`;

export const TotalLabel = styled(CostSection)`
  color: #4a4a4a;
  font-size: 16px;
  line-height: 24px;
  font-family: Rubik_500Medium;
  font-weight: 500;
`;
export const TotalValue = styled(TotalLabel)`
  font-family: Rubik_700Bold;
  font-weight: 700;
`;

export const AccordionItemWrapper = styled.View``;

export const StagesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
`;

export const Arrow = styled(SvgXml)`
  left: 0;
  position: absolute;
`;

export const StagesWrapper = styled.View`
  width: ${Dimensions.get('window').width - 80}px;
  flex-direction: column;
  margin-left: 16px;
`;

export const StageItem = styled.View`
  height: 36px;
  flex-direction: row;
`;

export const StageItemPosition = styled.View`
  width: 48px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

export const StageItemPositionText = styled(DefaultText)`
  color: #1d1d1d;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  opacity: 0.7;
`;

export const StageItemTitle = styled.View`
  background-color: #1d1d1d20;
  justify-content: center;
  flex: 1;
  padding-left: 8px;
`;

export const StageItemTitleText = styled(DefaultText)`
  color: #ffffff;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

export const StagesDescription = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const StageStep = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-horizontal: 18px;
  text-align: center;
`;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 800px;
  background-color: #ddd;
`;
