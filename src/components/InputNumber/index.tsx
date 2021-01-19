import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

interface InputProps {
  onChange: (value: number) => void
};

const InputNumberWrapper = styled(View)`
  background-color: #ffffff;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 6px;
  border: 2px solid #ccede7;
`;

const InputNumberContainer = styled(TextInput)`
  width: 100%;
  height: 100%;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  lineHeight: 20px;
  font-size: 16px;
  color: #1d1d1d;
  text-align: center;
  flex: 1;
`;

const Button = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const InputNumber = (props: InputProps): JSX.Element => {
  const { onChange } = props;
  const [total, setTotal] = useState(1);

  useEffect(() => {
    total > 1 && onChange(total);
  }, [total]);

  return (
    <InputNumberWrapper>
      <Button onPress={() => total >= 2 && setTotal(total - 1)}>
        <Feather
          name="minus"
          size={24}
          color="#d2d2d2"
        />
      </Button>
      <InputNumberContainer
        editable={false}
        value={total.toString()}
        keyboardType="decimal-pad"
      />
      <Button onPress={() => setTotal(total + 1)}>
        <Feather
          name="plus"
          size={24}
          color="#d2d2d2"
        />
      </Button>
    </InputNumberWrapper>
  );
};

export default InputNumber;
