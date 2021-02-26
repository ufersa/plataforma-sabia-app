/* eslint-disable react/require-default-props */
import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

interface ButtonProps {
  onPress(): void
  children: string
  variant?: string
  disabled?: boolean
  style?: object
  icon?: string
}

interface ButtonContainerProps {
  variant?: string
  children: string | JSX.Element
  style: object
  icon?: string
}

const ButtonContainer = ({
  variant,
  children,
  style,
  icon,
}: ButtonContainerProps) => (
  <S.ButtonWrapper variant={variant} style={style}>
    {icon && <Feather name="trash" size={24} color="#ffffff" style={{ marginRight: 8 }} />}
    <S.ButtonText variant={variant}>{children}</S.ButtonText>
  </S.ButtonWrapper>
);

ButtonContainer.defaultProps = {
  variant: 'primary',
};

const Button = ({
  onPress,
  children,
  variant,
  disabled = false,
  style,
  icon,
}: ButtonProps): JSX.Element => (
  <S.ButtonInteraction
    onPress={onPress}
    activeOpacity={disabled ? 1 : 0.7}
  >
    <ButtonContainer
      variant={variant}
      icon={icon}
      style={{ opacity: disabled ? 0.7 : 1, ...style }}
    >
      {children}
    </ButtonContainer>
  </S.ButtonInteraction>
);

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
