import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { DefaultText, Modal } from '..';
import Colors from '../../utils/colors';

interface SelectOptionProps {
  label: string
  value: string | number
}

interface SelectProps extends TouchableOpacityProps {
  placeholder?: string
  value?: string | number
  options: SelectOptionProps[]
}

const SelectWrapper = styled.TouchableOpacity`
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
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

const OptionsWrapper = styled.View`
  padding-horizontal: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const OptionsItem = styled.TouchableOpacity`
  min-width: 100px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  margin-horizontal: 8px;
  margin-bottom: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const OptionsItemSelected = styled(OptionsItem)`
  background-color: #CCEDE7;
  border-color: #CCEDE7;
`;

const OptionsItemLabel = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: ${({ selected }) => (selected ? Colors.primary : '#4a4a4a')};
`;

const Option = ({ selected, label, ...props }: any): JSX.Element => (
  selected
    ? (
      <OptionsItemSelected {...props}>
        <OptionsItemLabel selected>{label}</OptionsItemLabel>
      </OptionsItemSelected>
    )
    : (
      <OptionsItem {...props}>
        <OptionsItemLabel>{label}</OptionsItemLabel>
      </OptionsItem>
    )
);

const Select = (props: SelectProps): JSX.Element => {
  const { value, options, placeholder } = props;
  const getSelectedValue = options.find((option) => option.value === value);

  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(getSelectedValue?.value);

  return (
    <>
      <SelectWrapper
        activeOpacity={0.7}
        onPress={() => setShowOptions(true)}
      >
        <SelectText>
          {getSelectedValue ? getSelectedValue.label : placeholder}
        </SelectText>
        <Feather name="chevron-down" size={18} color="#d2d2d2" />
      </SelectWrapper>
      <Modal
        title={placeholder}
        animationType="slide"
        visible={showOptions}
        onClose={() => setShowOptions(false)}
      >
        <OptionsWrapper>
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
        </OptionsWrapper>
      </Modal>
    </>
  );
};

Select.defaultProps = {
  placeholder: '',
  value: '',
};

export default Select;
