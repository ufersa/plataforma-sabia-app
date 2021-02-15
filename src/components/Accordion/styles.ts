import styled from 'styled-components/native';
import DefaultText from '../Text';

export const AccordionWrapper = styled.View``;

export const AccordionItemWrapper = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
`;

export const AccordionItem = styled.TouchableOpacity`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionTitle = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const AccordionContent = styled.View`
  padding-bottom: 8px;
`;
