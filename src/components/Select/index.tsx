import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Modal from '../Modal';
import * as S from './styles';

interface SelectOptionProps {
  label: string
  value: string | number
}

interface SelectProps extends TouchableOpacityProps {
  placeholder?: string
  value?: string | number
  options: SelectOptionProps[]
}

const Option = ({ selected, label, ...props }: any): JSX.Element => (
  selected
    ? (
      <S.OptionsItemSelected {...props}>
        <S.OptionsItemLabel selected>{label}</S.OptionsItemLabel>
      </S.OptionsItemSelected>
    )
    : (
      <S.OptionsItem {...props}>
        <S.OptionsItemLabel>{label}</S.OptionsItemLabel>
      </S.OptionsItem>
    )
);

const Select = (props: SelectProps): JSX.Element => {
  const { value, options, placeholder } = props;
  const getSelectedValue = options.find((option) => option.value === value);

  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(getSelectedValue?.value);

  return (
    <>
      <S.SelectWrapper
        activeOpacity={0.7}
        onPress={() => setShowOptions(true)}
      >
        <S.SelectText>
          {getSelectedValue ? getSelectedValue.label : placeholder}
        </S.SelectText>
        <Feather name="chevron-down" size={18} color="#d2d2d2" />
      </S.SelectWrapper>
      <Modal
        title={placeholder}
        animationType="slide"
        visible={showOptions}
        onClose={() => setShowOptions(false)}
      >
        <S.OptionsWrapper>
          {options.map((option, idx) => (
            <Option
              {...option}
              key={`select_${idx}`}
              selected={currentValue === option.value}
              onPress={() => {
                setCurrentValue(option.value);
                setShowOptions(false);
              }}
            />
          ))}
        </S.OptionsWrapper>
      </Modal>
    </>
  );
};

Select.defaultProps = {
  placeholder: '',
  value: '',
};

export default Select;
