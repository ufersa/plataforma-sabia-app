import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components';
import colors from '../../utils/colors';

export const TabContainer = styled(View)`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
`;

type ItemProps = {
  isFocused: boolean
}

export const Item = styled(TouchableOpacity) <ItemProps>`
${({ isFocused }) => css`
  width: 56px;
  height: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${isFocused
    && css`
      background-color: ${colors.primary};
      border-radius: 50px;
      box-shadow: 0px 4px 16px #99DBCF;
    `}
  `}
`;

type ItemIconProps = {
  isFocused: boolean
}

export const ItemIcon = styled(Feather) <ItemIconProps>`
color: ${(props) => (props.isFocused ? '#ffffff' : '#a5a5a5')}
`;
