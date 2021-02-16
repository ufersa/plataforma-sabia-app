import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import colors from '../../utils/colors';

export const TabContainer = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
`;

type ItemProps = {
  isFocused: boolean
}

export const Item = styled.TouchableOpacity <ItemProps>`
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
      position: relative;
      z-index: 1;
    `}
  `}
`;

type ItemIconProps = {
  isFocused: boolean
}

export const ItemIcon = styled(Feather) <ItemIconProps>`
  color: ${(props) => (props.isFocused ? '#ffffff' : '#a5a5a5')};
  z-index: 1;
`;

type BackgroundProps = {
  isFocused: boolean
}

export const Background = styled.View<BackgroundProps>`
  ${({ isFocused }) => css`
    width: 92px;
    height: 92px;
    background-color: ${isFocused ? '#ffffff' : 'transparent'};
    border-radius: 50px;
    position: absolute;
    z-index: -1;
    left: -18px;
    top: ${isFocused ? '-10px' : '0px'};
  `}
`;
