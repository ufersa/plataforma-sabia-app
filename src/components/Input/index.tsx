import React from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TextInputProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';
import styled from 'styled-components';

interface InputProps extends TextInputProps {
  icon?: JSX.Element
  type: KeyboardTypeOptions
  multiline?: boolean
  returnKey?: ReturnKeyTypeOptions
  onSubmitEditing?: () => void
  size?: string
}

const InputWrapper = styled(View)`
  background-color: #e8e8e8;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
`;

const InputContainer = styled(TextInput)`
  width: 100%;
  height: 100%;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #a5a5a5;
  padding-left: 14px;
  padding-right: 20px;
`;

const IconWrapper = styled(View)`
  padding-left: 14px;
`;
interface SizesProps {
  [name: string]: number
}

const buildSize = (size: string = 'medium') => {
  const sizes: SizesProps = {
    medium: 56,
    small: 48,
  };
  return sizes[size];
};

const Input = (props: InputProps): JSX.Element => {
  const {
    size,
    icon,
    type,
    returnKey,
    multiline,
  } = props;

  return (
    <InputWrapper
      style={{
        paddingVertical: multiline ? 12 : 0,
        height: multiline ? 122 : buildSize(size),
      }}
    >
      {icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      <InputContainer
        {...props}
        keyboardType={type}
        placeholderTextColor="#a5a5a5"
        returnKeyType={returnKey}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </InputWrapper>
  );
};

Input.defaultProps = {
  icon: null,
  multiline: false,
  returnKey: 'done',
  onSubmitEditing: () => {},
  size: 'medium',
};

export default Input;
