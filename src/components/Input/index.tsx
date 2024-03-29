import React, {
  RefObject, useCallback, useRef, useState, useEffect,
} from 'react';
import {
  Keyboard,
  TextInputProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Colors from '@utils/colors';
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
  disabled?: boolean
  style?: {
    [property: string]: string | number
  },
  focus?: boolean
  mask?: string,
  error?: boolean,
  rightLabel?: JSX.Element
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
    returnKeyType = 'done',
    onSubmitEditing = () => Keyboard.dismiss(),
    multiline = false,
    variant,
    style,
    disabled,
    focus = false,
    onBlur,
    onFocus,
    mask,
    error = false,
    rightLabel,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<TextInput | null>(null);

  const borderColor = (variant === 'dark' ? '#00856d' : '#e8e8e8');
  const placeholderColor = (variant === 'dark' ? '#ffffff' : '#a5a5a5');

  useEffect(() => {
    if (ref.current && focus) {
      ref.current.focus();
    }
  }, [ref.current, focus]);

  const handleInputFocus = useCallback((event) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  }, []);

  const handleInputBlur = useCallback((event) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  }, []);

  return (
    <S.InputWrapper
      style={[{
        paddingVertical: multiline ? 12 : 0,
        height: multiline ? 122 : buildSize(size),
        opacity: disabled ? 0.5 : 1,
        borderColor: error ? Colors.danger : borderColor,
        borderWidth: 1,
      }, style]}
      variant={variant}
      isFocused={isFocused}
    >
      {icon && (
        <S.IconWrapper>
          {icon}
        </S.IconWrapper>
      )}
      {mask ? (
        <TextInputMask
          {...props}
          type="custom"
          options={{ mask }}
          customTextInput={S.InputContainer}
          customTextInputProps={{
            style: {
              height: buildSize(size),
            },
          }}
          keyboardType={type}
        />
      ) : (
        <S.InputContainer
          {...props}
          keyboardType={type}
          placeholderTextColor={error ? Colors.danger : placeholderColor}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={{ paddingBottom: 0 }}
          editable={!disabled}
          isFocused={isFocused}
          multiline={multiline}
          ref={ref}
        />
      )}
      {rightLabel && rightLabel}
    </S.InputWrapper>
  );
};

export default Input;
