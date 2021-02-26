import styled from 'styled-components/native';
import DefaultText from '../Text';
import Colors from '../../utils/colors';

export const TabsWrapper = styled.View``;

export const TabHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
`;

export const TabTitle = styled(DefaultText)`
  color: ${({ selected }: any) => (selected ? Colors.primary : '#a5a5a5')};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

// export const TabContentWrapper = styled.View`
//   padding-horizontal: 16px;
// `;

export const TabContentWrapper = styled.View``;
