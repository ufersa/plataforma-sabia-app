import React from 'react';
import * as S from './styles';

interface ButtonProps {
  onPress(): void
  children: string
  variant?: string
}

interface ButtonContainerProps {
  variant?: string
  children: string
}

const ButtonContainer = ({ variant, children }: ButtonContainerProps) => (
  <S.ButtonWrapper variant={variant}>
    <S.ButtonText variant={variant}>{children}</S.ButtonText>
  </S.ButtonWrapper>
);

ButtonContainer.defaultProps = {
  variant: 'primary',
};

const Button = ({ onPress, children, variant }: ButtonProps): JSX.Element => (
  <S.ButtonInteraction onPress={onPress} activeOpacity={0.7}>
    <ButtonContainer variant={variant}>
      {children}
    </ButtonContainer>
  </S.ButtonInteraction>
);

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
