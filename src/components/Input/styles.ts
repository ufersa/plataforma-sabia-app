import styled from 'styled-components/native';

export const InputWrapper = styled.View`
  background-color: ${({ variant }) => (variant && variant === 'dark' ? '#00856d' : '#e8e8e8')};
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
`;

export const InputContainer = styled.TextInput`
  width: 100%;
  height: 100%;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: ${({ variant }) => (variant && variant === 'dark' ? '#ffffff' : '#a5a5a5')};
  padding: 0px 20px 0px 14px;
`;

export const IconWrapper = styled.View`
  padding-left: 14px;
`;
