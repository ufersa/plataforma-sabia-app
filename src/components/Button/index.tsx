/* eslint-disable react/require-default-props */
import React from 'react';
import * as S from './styles';

interface ButtonProps {
  onPress(): void
  children: string
  variant?: string
  disabled?: boolean
}

interface ButtonContainerProps {
  variant?: string
  children: string
  style: object
}

const ButtonContainer = ({ variant, children, style }: ButtonContainerProps) => (
  <S.ButtonWrapper variant={variant} style={style}>
    <S.ButtonText variant={variant}>{children}</S.ButtonText>
  </S.ButtonWrapper>
);

const Button = ({
  onPress,
  children,
  variant,
  disabled = false,
}: ButtonProps): JSX.Element => (
  <S.ButtonInteraction
    onPress={onPress}
    activeOpacity={disabled ? 1 : 0.7}
  >
    <ButtonContainer
      variant={variant}
      style={{ opacity: disabled ? 0.7 : 1 }}
    >
      {children}
    </ButtonContainer>
  </S.ButtonInteraction>
);

export default Button;
