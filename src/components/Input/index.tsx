import React from 'react';
import { TextInputProps, KeyboardTypeOptions } from 'react-native';
import * as S from './styles';

interface InputProps extends TextInputProps {
  icon: JSX.Element
  type: KeyboardTypeOptions
}

const Input = (props: InputProps): JSX.Element => {
  const { icon, type } = props;
  return (
    <S.InputWrapper>
      {icon && icon}
      <S.InputContainer
        {...props}
        keyboardType={type}
        placeholderTextColor="#a5a5a5"
      />
    </S.InputWrapper>
  );
};

export default Input;
