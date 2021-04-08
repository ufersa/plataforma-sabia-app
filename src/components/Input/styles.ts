import styled, { css } from 'styled-components/native';

interface InputWrapperProps {
  variant?: string
  isFocused: boolean
}
interface InputContainerProps {
  variant?: string
  isFocused: boolean
  multiline?: boolean
}

export const InputWrapper = styled.View<InputWrapperProps>`
  background-color: ${({ variant }) => (variant === 'dark' ? '#00856d' : '#e8e8e8')};
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  border: 1px solid ${({ variant }) => (variant === 'dark' ? '#00856d' : '#e8e8e8')};

  ${({ isFocused, variant }) => isFocused
    && css`
      border-color: ${(variant === 'dark' ? '#ffffff' : '#e8e8e8')};
      background-color: ${(variant === 'dark' ? 'transparent' : '#ffffff')};
    `}
`;

export const InputContainer = styled.TextInput<InputContainerProps>`
  width: 100%;
  height: 100%;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  color: ${({ variant }) => (variant === 'dark' ? '#ffffff' : '#a5a5a5')};
  padding-left: 14px;
  padding-right: 0;
  text-align-vertical: ${({ multiline }) => (multiline ? 'top' : 'center')};
`;

export const IconWrapper = styled.View`
  padding-left: 14px;
`;
