import React from 'react';
import { TextInputProps, KeyboardTypeOptions } from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  icon: JSX.Element
  type: KeyboardTypeOptions
}

const InputWrapper = styled.View`
  background-color: #e8e8e8;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;

const InputContainer = styled.TextInput`
  width: 100%;
  height: 100%;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  color: #a5a5a5;
  padding-left: 14px;
  padding-right: 20px;
`;

const Input = (props: InputProps): JSX.Element => {
  const { icon, type } = props;
  return (
    <InputWrapper>
      {icon && icon}
      <InputContainer
        {...props}
        keyboardType={type}
        placeholderTextColor="#a5a5a5"
      />
    </InputWrapper>
  );
};

export default Input;
