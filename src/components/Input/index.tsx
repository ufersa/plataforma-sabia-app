import React from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TextInputProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions
} from 'react-native';
import styled from 'styled-components';

interface InputProps extends TextInputProps {
  icon?: JSX.Element
  type?: KeyboardTypeOptions
  multiline?: boolean
  returnKey?: ReturnKeyTypeOptions
};

const InputWrapper = styled(View)`
  backgroundColor: #e8e8e8;
  width: 100%;
  borderRadius: 8px;
  flexDirection: row;
  alignItems: center;
  paddingLeft: 6px;
  paddingRight: 6px;
`;

const InputContainer = styled(TextInput)`
  width: 100%;
  height: 100%;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  lineHeight: 20px;
  fontSize: 16px;
  color: #a5a5a5;
  paddingLeft: 14px;
  paddingRight: 20px;
`;

const IconWrapper = styled(View)`
  paddingLeft: 14px;
`;

const Input = (props: InputProps): JSX.Element => {
  const handleKeyDown = (ev: any) => {
    ev.nativeEvent.key === 'Enter' && Keyboard.dismiss();
  };

  return (
    <InputWrapper
      style={{
        paddingVertical: props.multiline ? 12 : 0,
        height: props.multiline ? 122 : 56
      }}
    >
      {props.icon && (
        <IconWrapper>
          {props.icon}
        </IconWrapper>
      )}
      <InputContainer
        {...props}
        keyboardType={props.type}
        placeholderTextColor="#a5a5a5"
        returnKeyType={props.returnKey}
        onKeyPress={handleKeyDown}
      />
    </InputWrapper>
  );
};

export default Input;
