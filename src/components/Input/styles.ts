import styled, { css } from 'styled-components/native';

interface InputWrapperProps {
  variant?: string
  isFocused: boolean;
}
interface InputContainerProps {
  variant?: string
}

export const InputWrapper = styled.View<InputWrapperProps>`
  background-color: ${({ variant }) => (variant === 'dark' ? '#00856d' : '#e8e8e8')};
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;

  ${({ isFocused, variant }) => isFocused
    && css`
      border: 1px solid ${(variant === 'dark' ? '#ddd' : '#aaa')};
      background-color: ${(variant === 'dark' ? '#28a07f' : '#ddd')};
    `}

`;

export const InputContainer = styled.TextInput<InputContainerProps>`
  width: 100%;
  height: 100%;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: ${({ variant }) => (variant === 'dark' ? '#eee' : '#a5a5a5')};
  padding: 0px 20px 0px 14px;
  text-align-vertical: top;
`;

export const IconWrapper = styled.View`
  padding-left: 14px;
`;
