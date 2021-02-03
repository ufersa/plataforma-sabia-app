import styled, { css } from 'styled-components/native';
import DefaultText from '../Text';
import Colors from '../../utils/colors';

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
    danger: {
      backgroundColor: colorsDefault[variant],
      color: '#ffffff',
    },
  };

  return variants[variant];
};

export const ButtonInteraction = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
`;

interface ButtonWrapperProps{
  variant?: string
}

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${(props: any) => css`
    backgroundColor: ${buildStyle(props.variant).backgroundColor};
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
