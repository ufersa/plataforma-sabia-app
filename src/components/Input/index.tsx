import React from 'react';
import { View, TextInput, TextInputProps, KeyboardTypeOptions } from 'react-native';
import styled from 'styled-components';

interface InputProps extends TextInputProps {
  icon?: JSX.Element
  type?: KeyboardTypeOptions
};

const InputWrapper = styled(View)`
  backgroundColor: #e8e8e8;
  width: 100%;
  height: 56px;
  borderRadius: 8px;
  flexDirection: row;
  alignItems: center;
  paddingHorizontal: 20px;
`;

const InputContainer = styled(TextInput)`
  width: 100%;
  height: 100%;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 16px;
  color: #a5a5a5;
  paddingLeft: 14px;
  paddingRight: 20px;
`;

const Input = (props: InputProps): JSX.Element => (
  <InputWrapper>
    {props.icon && props.icon}
    <InputContainer
      {...props}
      keyboardType={props.type}
      placeholderTextColor="#a5a5a5"
    />
  </InputWrapper>
);

export default Input;
