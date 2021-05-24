import styled, { css } from 'styled-components/native';
import Colors from '@utils/colors';
import DefaultText from '../Text';
import { BadgeProps } from '.';

const buildStyle = (variant: string = 'default') => {
  const colorsDefault: any = Colors;
  const variants: any = {
    primary: {
      backgroundColor: colorsDefault[`${variant}Light`],
      color: colorsDefault[variant],
    },
    info: {
      backgroundColor: colorsDefault[`${variant}Light`],
      color: colorsDefault[variant],
    },
    default: {
      backgroundColor: '#e8e8e8',
      color: '#777777',
    },
  };

  return variants[variant];
};

export const BadgeWrapper = styled.View<BadgeProps>`
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  text-align: center;
  padding: 0 8px;

  ${(props: any) => css`
    background-color: ${buildStyle(props.variant).backgroundColor};
  `}
`;

export const Text = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  
  ${(props: any) => css`
    color: ${buildStyle(props.variant).color};
  `}
`;
