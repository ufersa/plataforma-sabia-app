import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';

export const TabContainer = styled(View)`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ItemIcon = styled(Feather)``;
