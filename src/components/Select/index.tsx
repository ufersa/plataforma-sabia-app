import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { DefaultText } from '../'

interface SelectOptionProps {
  label: string  
  value: string | number
}

interface SelectProps extends TouchableOpacityProps {
  placeholder?: string
  value?: string | number
  onPress(): void
  options: SelectOptionProps[]
};

const SelectWrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 2px solid #D2D2D2;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 16px;
`;

const SelectText = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  lineHeight: 20px;
  fontSize: 16px;
  color: #4a4a4a;
`;

const Select = (props: SelectProps): JSX.Element => {
  const { value, options, placeholder, onPress } = props;
  const getSelectedValue = options.find((option) => option.value === value);

  return (
    <SelectWrapper activeOpacity={.7} onPress={onPress}>
      <SelectText>
        {getSelectedValue ? getSelectedValue.label : placeholder}
      </SelectText>
      <Feather name="chevron-down" size={18} color="#d2d2d2" />
    </SelectWrapper>
  );
};

export default Select;
