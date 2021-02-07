import React from 'react';
import {
  Keyboard,
  TextInputProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  icon?: JSX.Element
  type: KeyboardTypeOptions
  multiline?: boolean
  returnKey?: ReturnKeyTypeOptions
  onSubmitEditing?: () => void
  size?: string
}
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
    size = 'medium',
    icon = null,
    type,
    returnKey = 'done',
    multiline = false,
  } = props;

  return (
    <S.InputWrapper
      style={{
        paddingVertical: multiline ? 12 : 0,
        height: multiline ? 122 : buildSize(size),
      }}
    >
      {icon && (
        <S.IconWrapper>
          {icon}
        </S.IconWrapper>
      )}
      <S.InputContainer
        {...props}
        keyboardType={type}
        placeholderTextColor="#a5a5a5"
        returnKeyType={returnKey}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </S.InputWrapper>
  );
};

export default Input;
