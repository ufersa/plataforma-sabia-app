import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';
import DefaultText from '../Text';
import Colors from '../../utils/colors';
interface ButtonProps {
  onPress(): void
  children: string
  variant?: string
};

interface ButtonContainerProps {
  variant?: string
  children: string
};

const ButtonInteraction = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
`;

const ButtonWrapper: any = styled(View)`
  width: 100%;
  height: 56px;
  borderRadius: 8px;
  justifyContent: center;
  alignItems: center;

  ${(props: any) => css`
    backgroundColor: ${buildStyle(props.variant).backgroundColor};
  `}
`;

const ButtonText: any = styled(DefaultText)`
  fontWeight: 500;
  fontSize: 16px;
  lineHeight: 24px;

  ${(props: any) => css`
    color: ${buildStyle(props.variant).color};
  `}
`;

const buildStyle = (variant: string = 'primary') => {
  const colorsDefault: any = Colors;
  const variants: any = {
    primary: {
      backgroundColor: colorsDefault[variant],
      color: "#ffffff"
    },
    danger: {
      backgroundColor: colorsDefault[variant],
      color: "#ffffff"
    }
  };

  return variants[variant];
}; 

const ButtonContainer = ({ variant, children }: ButtonContainerProps) => (
  <ButtonWrapper variant={variant}>
    <ButtonText variant={variant}>{children}</ButtonText>
  </ButtonWrapper>
);

const Button = ({ onPress, children, variant }: ButtonProps): JSX.Element => (
  <ButtonInteraction onPress={onPress} activeOpacity={.7}>
    <ButtonContainer variant={variant}>
      {children}
    </ButtonContainer>
  </ButtonInteraction>
);

export default Button;
