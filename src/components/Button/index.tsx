/* eslint-disable react/require-default-props */
import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

interface ButtonProps {
  onPress(): void
  children: string | JSX.Element | Element
  variant?: string
  disabled?: boolean
  style?: object
  icon?: string
  size?: string
}

interface ButtonContainerProps {
  variant?: string
  children: string | JSX.Element | Element
  style: object
  icon?: string
  size?: string
}

const ButtonContainer = ({
  variant,
  children,
  style,
  icon,
  size,
}: ButtonContainerProps) => (
  <S.ButtonWrapper
    variant={variant}
    style={style}
    size={size}
  >
    {icon ? <Feather name={icon} size={24} color="#ffffff" style={{ marginRight: 8 }} /> : <></>}
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
  size,
}: ButtonProps): JSX.Element => (
  <S.ButtonInteraction
    onPress={onPress}
    activeOpacity={disabled ? 1 : 0.7}
  >
    <ButtonContainer
      variant={variant}
      icon={icon}
      style={{ opacity: disabled ? 0.7 : 1, ...style }}
      size={size}
    >
      {children}
    </ButtonContainer>
  </S.ButtonInteraction>
);

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
