import React, {
  RefObject, useCallback, useRef, useState,
} from 'react';
import {
  Keyboard,
  TextInputProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  // eslint-disable-next-line no-unused-vars
  refs?: ((instance: TextInput | null) => void) | RefObject<TextInput> | null | undefined
  icon?: JSX.Element
  type: KeyboardTypeOptions
  multiline?: boolean
  returnKeyType?: ReturnKeyTypeOptions
  onSubmitEditing?: () => void
  size?: string
  variant?: string
  style?: {
    [property: string]: string | number
  },
  focus?: string
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
    refs = useRef(null),
    size = 'medium',
    icon = null,
    type,
    returnKeyType = 'done',
    onSubmitEditing = () => Keyboard.dismiss(),
    multiline = false,
    variant,
    style,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <S.InputWrapper
      style={[{
        paddingVertical: multiline ? 12 : 0,
        height: multiline ? 122 : buildSize(size),
      }, style]}
      variant={variant}
      isFocused={isFocused}
    >
      {icon && (
        <S.IconWrapper>
          {icon}
        </S.IconWrapper>
      )}
      <S.InputContainer
        {...props}
        keyboardType={type}
        placeholderTextColor={variant === 'dark' ? '#ffffff' : '#a5a5a5'}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={{ paddingBottom: 0 }}
        ref={refs}
      />
    </S.InputWrapper>
  );
};

export default Input;
