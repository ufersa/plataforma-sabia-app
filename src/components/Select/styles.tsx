import styled from 'styled-components/native';
import DefaultText from '../Text';
import Colors from '../../utils/colors';

export const SelectWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 2px solid #D2D2D2;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;
`;

export const SelectText = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

export const OptionsWrapper = styled.View`
  padding: 0 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const OptionsItem = styled.TouchableOpacity`
  min-width: 100px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  margin: 0 8px;
  margin-bottom: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const OptionsItemSelected = styled(OptionsItem)`
  background-color: #CCEDE7;
  border-color: #CCEDE7;
`;

export const OptionsItemLabel = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: ${({ selected }) => (selected ? Colors.primary : '#4a4a4a')};
`;
