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
  size?: string
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
interface SizesProps {
  [name: string]: number
}

const buildSize = (size: string = 'medium') => {
  const sizes: SizesProps = {
    medium: 56,
    small: 48
  };
  return sizes[size];
}; 

const Input = (props: InputProps): JSX.Element => {
  const { size, icon, type, returnKey } = props;

  const handleKeyDown = (ev: any) => {
    ev.nativeEvent.key === 'Enter' && Keyboard.dismiss();
  };

  return (
    <InputWrapper
      style={{
        paddingVertical: props.multiline ? 12 : 0,
        height: props.multiline ? 122 : buildSize(size)
      }}
    >
      {props.icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      <InputContainer
        {...props}
        keyboardType={type}
        placeholderTextColor="#a5a5a5"
        returnKeyType={returnKey}
        onKeyPress={handleKeyDown}
      />
    </InputWrapper>
  );
};

export default Input;
