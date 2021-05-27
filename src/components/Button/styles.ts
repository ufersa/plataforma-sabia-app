import styled, { css } from 'styled-components/native';
import Colors from '@utils/colors';
import DefaultText from '../Text';

const buildStyle = (variant: string = 'primary') => {
  const colorsDefault: any = Colors;
  const variants: any = {
    primary: {
      backgroundColor: colorsDefault[variant],
      color: '#ffffff',
    },
    'primary-light': {
      backgroundColor: colorsDefault.primaryLight,
      color: colorsDefault.primary,
    },
    secondary: {
      backgroundColor: colorsDefault[variant],
      color: '#ffffff',
    },
    white: {
      backgroundColor: '#ffffff',
      color: colorsDefault.primary,
    },
    danger: {
      backgroundColor: colorsDefault[variant],
      color: '#ffffff',
    },
    info: {
      backgroundColor: colorsDefault[variant],
      color: '#ffffff',
    },
    'info-light': {
      backgroundColor: colorsDefault.infoLight,
      color: colorsDefault.info,
    },
    orange: {
      backgroundColor: colorsDefault[variant],
      color: '#ffffff',
    },
    'orange-light': {
      backgroundColor: colorsDefault.orangeLight,
      color: colorsDefault.orange,
    },
  };

  return variants[variant];
};

const buildSize = (size: string = 'lg') => {
  const variants: String[] = ['lg', 'md'];
  const sizes: Number[] = [56, 40];

  return sizes[variants.indexOf(size)];
};

export const ButtonInteraction = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
`;

interface ButtonWrapperProps{
  variant?: string
  size?: string
}

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  width: 100%;
  height: ${({ size }) => buildSize(size)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  ${(props: any) => css`
    background-color: ${buildStyle(props.variant).backgroundColor};
  `}
`;

export const ButtonText = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  ${(props: any) => css`
    color: ${buildStyle(props.variant).color};
  `}
`;
